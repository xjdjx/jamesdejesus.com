import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { unstable_noStore as noStore } from 'next/cache'

const deliveryClient = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
})

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
})

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields
      return `<img src="https:${file.url}" alt="${title ?? ''}" />`
    },
  },
}

export async function getAllPosts(preview = false) {
  noStore()
  const client = preview ? previewClient : deliveryClient
  const entries = await client.getEntries({ content_type: 'blogPost', include: 2 })
  return entries.items.map((item) => item.fields)
}

export async function getPostBySlug(slug, preview = false) {
  const posts = await getAllPosts(preview)
  const post = posts.find((p) => p.slug === slug)
  if (!post) return null
  return {
    ...post,
    content: documentToHtmlString(post.body, renderOptions),
  }
}
