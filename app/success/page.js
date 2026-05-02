import Link from 'next/link'
import Layout from '../../components/layout'

export const metadata = {
  title: 'James de Jesus',
}

export default function Success() {
  return (
    <Layout>
      <p>Thanks!</p>
      <Link href="/">home</Link>
    </Layout>
  )
}
