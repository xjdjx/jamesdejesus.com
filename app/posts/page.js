import Layout from '../../components/layout'
import blogData from '../../data/blogPost'
import Excerpt from '../../components/excerpt'

export const metadata = {
  title: 'James de Jesus - All Posts',
}

export default function Posts() {
  const allPosts = blogData.map((p) => p.fields)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

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
