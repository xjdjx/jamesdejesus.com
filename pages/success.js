import Link from 'next/link';
import Layout from '../components/layout';

export default function Success({}) {
  return (
    <Layout>
        <p>Thanks!</p>
        <Link href="/"><a>home</a></Link>
    </Layout>
  )
}