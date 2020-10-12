import { formatDate } from '../lib/format'
import ArticlePageTag from './ArticlePageTag'
import styles from './article.module.scss'

export default function Article(props: {
  children: React.ReactNode
  title: string
  date: string
  tags: string[]
}) {
  return (
    <>
      <div className={styles.date}>{formatDate(props.date)}</div>
      <h1 className={styles.title}>{props.title}</h1>
      <ArticlePageTag tags={props.tags} />
      <article className={styles.article}>
        {props.children}
      </article>
    </>
  )
}