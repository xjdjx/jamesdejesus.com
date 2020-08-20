import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from '../../components/layout';
import DateFormater from '../../components/date-formatter';

export default function Post({post}){
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout title={post.title}>
            <article>
                <h2>{post.title}</h2>
                <DateFormater dateString={post.date} />
                <p>{post.excerpt}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }}/>
                <Link href="/">home</Link>
            </article>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
    ])
    const content = await markdownToHtml(post.content || '')
  
    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])
  
    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}