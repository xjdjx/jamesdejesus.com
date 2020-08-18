import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <Container fluid>
      <Head>
        <title>James de Jesus</title>
      </Head>
      <Row>
        <Col className="align-middle">
          <h1>James de Jesus</h1>
          Technology Leader<br />
          <a href="James_de_Jesus_2018_resume.pdf" title="resume">Resume</a>
        </Col>
      </Row>
    </Container>
  )
}
