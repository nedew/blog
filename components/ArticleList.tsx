import Link from 'next/link'
import Tags from './Tags'
import styles from './styles/articleList.module.scss'
import { formatDate } from '../lib/format'
import Articles from '../pages/articles'

export default function ArticleList(props: {
  articles: {
    slug: string
    title: string
    date: string
    tags: string[]
  }[]
}) {
  return (
    <>
      {/* <div className={styles.spacer}></div> */}
      {props.articles.map((a, index) => {
        return (
          <div className={styles.item} key={index}>
            {/* <div className={styles.date}>{formatDate(a.date)}</div> */}
            <Link href='/articles/[slug]' as={`/articles/${a.slug}`}>
            {/* <Link href={`/articles/${a.slug}`}> */}
              <a className={styles.title}>{a.title}</a>
            </Link>
            <div className={styles.articleInfo}>
              <div className={styles.date}>{formatDate(a.date)}</div>
              <div className={styles.separation}> / </div>
              <Tags tags={a.tags} />
            </div>
          </div>
        )
      })}
    </>
  )
}