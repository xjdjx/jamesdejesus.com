import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css';

export default function Header() {
    return (
        <Row className={styles.header}>
            <Col>
                <Link href="/">
                    <h1>James de Jesus</h1>
                </Link>
                Technology Leader
            </Col>
        </Row>
    )
}