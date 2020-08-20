import Link from 'next/link';
import DateFormater from '../components/date-formatter';

export default function Newest({
        title,
        date,
        excerpt,
        slug,
    }) {
    return (
      <section>
        <h3>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
            </Link>
        </h3>
        <DateFormater dateString={date} />
        <p>{excerpt}</p>
      </section>
    )
}