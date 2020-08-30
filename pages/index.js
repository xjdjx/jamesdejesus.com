import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css';
import Excerpt from '../components/excerpt';
import Layout from '../components/layout';
import { getContentfulContent } from '../lib/getContentfulContent';
import blogData from '../data/blogPost';

export default function Home() {
  const allPosts = blogData.map((p) => {
    return p.fields
  }).sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  const newestPost = allPosts[0];
  return (
    <Layout>
      <Row>
        <Col md={2} className={styles.left}>
          <p>Though most of the time I lead technology teams for a living, I also ride bikes and play in the snow.</p>
        </Col>
        <Col md={10} className={styles.main}>
          <Excerpt 
            title={newestPost.title}
            date={newestPost.date}
            excerpt={newestPost.excerpt}
            slug={newestPost.slug}
          />
        </Col>
      </Row>
    </Layout>
  )
}

export async function getStaticProps() {
  const content = await getContentfulContent();

  return {
    props: { content },
  }
}
