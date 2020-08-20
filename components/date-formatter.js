import styles from '../styles/Home.module.css';
import { parseISO, format } from 'date-fns'

export default function DateFormater({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString} className={styles.date}>{format(date, 'LLLL	d, yyyy')}</time>
}