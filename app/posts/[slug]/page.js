import { notFound } from 'next/navigation'
import Link from 'next/link'
import Layout from '../../../components/layout'
import DateFormater from '../../../components/date-formatter'
import blogData from '../../../data/blogPost'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const allPosts = blogData.map((p) => p.fields)

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = allPosts.find(p => p.slug === slug)
  return {
    title: post ? `James de Jesus - ${post.title}` : 'James de Jesus',
    openGraph: {
      title: post ? `James de Jesus - ${post.title}` : 'James de Jesus',
    },
  }
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export default async function Post({ params }) {
  const { slug } = await params
  const post = allPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const content = documentToHtmlString(post.body)

  return (
    <Layout>
      <article>
        <h2>{post.title}</h2>
        <DateFormater dateString={post.date} />
        <p>{post.excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Link href="/posts">All Posts</Link>
      </article>
    </Layout>
  )
}
