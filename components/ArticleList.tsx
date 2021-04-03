import Link from 'next/link'
import TagsInArticleList from './TagsInArticleList'
import styles from './styles/articleList.module.scss'
import { formatDate } from '../lib/format'

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
          <Link href='/articles/[slug]' as={`/articles/${a.slug}`}>
            <div className={styles.item} key={index}>
              <div className={styles.date}>{formatDate(a.date)}</div>
              <div className={styles.title}>{a.title}</div>
            </div>
          </Link>
        )
      })}
    </>
  )
}