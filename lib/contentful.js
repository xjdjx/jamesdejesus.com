import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const BASE_URL = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/entries`

async function fetchEntries(params = {}) {
  const searchParams = new URLSearchParams({ content_type: 'blogPost', ...params })
  const res = await fetch(`${BASE_URL}?${searchParams}`, {
    headers: { Authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}` },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`Contentful fetch failed: ${res.status}`)
  return res.json()
}

export async function getAllPosts() {
  const data = await fetchEntries()
  return data.items.map((item) => item.fields)
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
