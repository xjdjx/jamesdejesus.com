import Layout from '../../components/layout'
import Excerpt from '../../components/excerpt'
import { getAllPosts } from '../../lib/contentful'

export const metadata = {
  title: 'James de Jesus - All Posts',
}

export default async function Posts() {
  const allPosts = (await getAllPosts())
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return (
    <Layout>
      <h2>All Posts</h2>
      {allPosts.map(post => (
        <Excerpt
          key={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
        />
      ))}
    </Layout>
  )
}
