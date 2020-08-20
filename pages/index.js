import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css';
import Newest from '../components/newest';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api'

export default function Home({allPosts}) {
  const newestPost = allPosts[0];
  return (
    <Layout>
      <Row>
        <Col md={2} className={styles.left}>
          <p>Cyclist and snowboarder, though most of the time I lead technology teams for a living.</p>
          <p>
            <Link href="James_de_Jesus_2018_resume.pdf">Resume</Link><br />
            <a href="https://www.linkedin.com/in/xjamesdejesusx/">LinkedIn</a><br />
            <a href="https://www.strava.com/athletes/418775">Strava</a>
          </p>
        </Col>
        <Col md={10} className={styles.main}>
          <Newest 
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
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
