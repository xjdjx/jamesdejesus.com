import Link from 'next/link';
import DateFormater from './date-formatter';
import styles from '../styles/Home.module.css';

export default function Excerpt({
        title,
        date,
        excerpt,
        slug,
    }) {
    return (
      <section className={styles.excerpt}>
        <h4>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
            </Link>
        </h4>
        <DateFormater dateString={date} />
        <p>{excerpt}</p>
        <p><Link as={`/posts/${slug}`} href="/posts/[slug]">Read more...</Link></p>
      </section>
    )
}