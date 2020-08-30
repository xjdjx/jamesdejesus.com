import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (
        <>
        <header className="mt-4 mb-2">
            <Row>
                <Col>
                    <Link href="/">
                        <h1>James de Jesus</h1>
                    </Link>
                    Technology Leader
                </Col>
            </Row>
        </header>
        <nav className="mb-4">
            <Row>
                <Col>
                    <ul className="nav">
                        <li><Link href="/posts"><a className="mr-2">All Posts</a></Link></li>
                        <li><Link href="James_de_Jesus_2018_resume.pdf"><a className="mr-2">Resume</a></Link></li>
                        <li><a href="https://www.linkedin.com/in/xjamesdejesusx/" className="mr-2">LinkedIn</a></li>
                        <li><a href="https://www.strava.com/athletes/418775" className="mr-2">Strava</a></li>
                        <li><Link href="/contact"><a className="mr-2">Contact</a></Link><br /></li>
                    </ul>
                </Col>
            </Row>
        </nav>
        </>
    )
}