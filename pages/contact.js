import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/layout';

export default function Contact({}) {
  return (
    <Layout>
        <div className="form-group">
            <form name="contact" action="/success" data-netlify="true">
                <Row className="mb-3">
                    <Col md={2}><label for="name">Your Name:</label></Col>
                    <Col><input type="text" name="name" className="form-control" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col md={2}><label for="email">Your Email:</label></Col>
                    <Col><input type="email" name="email" className="form-control" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col md={2}><label for="message">Message:</label></Col>
                    <Col><textarea name="message" className="form-control"></textarea></Col>
                </Row>
                <Row className="mb-3">
                    <Col md={1}><button type="submit" className="form-control">Send</button></Col>
                </Row>
            </form>
            <Link href="/"><a>home</a></Link>
        </div>
    </Layout>
  )
}