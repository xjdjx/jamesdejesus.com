import { notFound } from 'next/navigation'
import Link from 'next/link'
import Layout from '../../../components/layout'
import DateFormater from '../../../components/date-formatter'
import { getAllPosts, getPostBySlug } from '../../../lib/contentful'


export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return {
    title: post ? `James de Jesus - ${post.title}` : 'James de Jesus',
    openGraph: {
      title: post ? `James de Jesus - ${post.title}` : 'James de Jesus',
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Post({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <article>
        <h2>{post.title}</h2>
        <DateFormater dateString={post.date} />
        <p>{post.excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link href="/posts">All Posts</Link>
      </article>
    </Layout>
  )
}
