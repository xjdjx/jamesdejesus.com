import Layout from '../../components/layout';
import blogData from '../../data/blogPost';
import Excerpt from '../../components/excerpt';

export default function Posts() {
  const allPosts = blogData.map((p) => {
    return p.fields
  }).sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  return (
    <Layout title='All Posts'>
        <h2>All Posts</h2>
        {
            allPosts.map( post => (
                <Excerpt 
                    title={post.title}
                    date={post.date}
                    excerpt={post.excerpt}
                    slug={post.slug}
                />
            ))
        }
    </Layout>
  )
}
