import Link from 'next/link'
import Layout from '../../components/layout'

export const metadata = {
  title: 'James de Jesus - Contact',
}

export default function Contact() {
  return (
    <Layout>
      <div className="form-group">
        <form name="contact" action="/success" method="POST" data-netlify="true">
          <div className="row mb-3">
            <div className="col-md-2"><label htmlFor="name">Your Name:</label></div>
            <div className="col"><input type="text" name="name" className="form-control" /></div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2"><label htmlFor="email">Your Email:</label></div>
            <div className="col"><input type="email" name="email" className="form-control" /></div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2"><label htmlFor="message">Message:</label></div>
            <div className="col"><textarea name="message" className="form-control"></textarea></div>
          </div>
          <div className="row mb-3">
            <div className="col-md-1"><button type="submit" className="form-control">Send</button></div>
          </div>
        </form>
        <Link href="/">home</Link>
      </div>
    </Layout>
  )
}
