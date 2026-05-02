import styles from '../styles/Home.module.css'
import Excerpt from '../components/excerpt'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/contentful'

export const metadata = {
  title: 'James de Jesus',
}

export default async function Home() {
  const allPosts = (await getAllPosts())
    .sort((a, b) => (a.date > b.date ? -1 : 1))

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
