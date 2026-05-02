import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
})

export async function getAllPosts() {
  const entries = await client.getEntries({ content_type: 'blogPost' })
  return entries.items.map((item) => item.fields)
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return null
  return {
    ...post,
    content: documentToHtmlString(post.body),
  }
}
