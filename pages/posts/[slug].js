import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link';
import Layout from '../../components/layout';
import DateFormater from '../../components/date-formatter';
import blogData from '../../data/blogPost';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const allPosts = blogData.map((p) => {
    return p.fields
  })

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
                <Link href="/posts">All Posts</Link>
            </article>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const currentPost = allPosts.find(post => {
        return post.slug === params.slug;
    });
    
    const content = documentToHtmlString(currentPost.body);

    return {
        props: {
            post: {
                ...currentPost,
                content,
            },
        },
    }
}

export async function getStaticPaths() {  
    return {
        paths: allPosts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}