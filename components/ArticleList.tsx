import Link from 'next/link'
import styles from './styles/articleList.module.scss'
import { formatDate } from '../lib/format'

export default function ArticleList(props: {
  articles: {
    slug: string
    title: string
    date: string
  }[]
}) {
  return (
    <>
      {props.articles.map((a, index) => {
        return (
          <div className={styles.item} key={index}>
            <Link href={`/articles/${a.slug}`}>
              <a className={styles.title}>{a.title}</a>
            </Link>
            <div className={styles.date}>{formatDate(a.date)}</div>
          </div>
        )
      })}
    </>
  )
}