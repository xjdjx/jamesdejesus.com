import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { unstable_noStore as noStore } from 'next/cache'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
})

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields
      return `<img src="https:${file.url}" alt="${title ?? ''}" />`
    },
  },
}

export async function getAllPosts() {
  noStore()
  const entries = await client.getEntries({ content_type: 'blogPost', include: 2 })
  return entries.items.map((item) => item.fields)
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return null
  return {
    ...post,
    content: documentToHtmlString(post.body, renderOptions),
  }
}
