import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Header from '../components/header';

export default function Layout({children,title}) {
    const pageTitle = title ? `James de Jesus - ${title}`: "James de Jesus";

    return (
        <Container>
            <Head>
                <title>{pageTitle}</title>
                <meta property="og:title" content="pageTitle" key="title" />
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />
            <main>{children}</main>
        </Container>
    )
}