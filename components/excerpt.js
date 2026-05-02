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
            <Link href={`/posts/${slug}`} className="hover:underline">{title}</Link>
        </h4>
        <DateFormater dateString={date} />
        <p>{excerpt}</p>
        <p><Link href={`/posts/${slug}`}>Read more...</Link></p>
      </section>
    )
}