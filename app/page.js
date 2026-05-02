import styles from '../styles/Home.module.css'
import Excerpt from '../components/excerpt'
import Layout from '../components/layout'
import blogData from '../data/blogPost'

export const metadata = {
  title: 'James de Jesus',
}

export default function Home() {
  const allPosts = blogData.map((p) => p.fields)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  const newestPost = allPosts[0]
  return (
    <Layout>
      <div className="row">
        <div className={`col-md-2 ${styles.left}`}>
          <p>Though most of the time I lead technology teams for a living, I also ride bikes and play in the snow.</p>
        </div>
        <div className={`col-md-10 ${styles.main}`}>
          <Excerpt
            title={newestPost.title}
            date={newestPost.date}
            excerpt={newestPost.excerpt}
            slug={newestPost.slug}
          />
        </div>
      </div>
    </Layout>
  )
}
