import { formatDate } from '../lib/format'
import ArticlePageTag from './ArticlePageTag'
import styles from './styles/article.module.scss'
import Head from 'next/head'

export default function Article(props: {
  children: React.ReactNode
  title: string
  date: string
  tags: string[]
}) {
  return (
    <>
      {/* <Head>
        <link href='../styles/prism.css' rel='stylesheet' />
      </Head> */}
      <div className={styles.date}>{formatDate(props.date)}</div>
      <h1 className={styles.title}>{props.title}</h1>
      <ArticlePageTag tags={props.tags} />
      <article className={styles.article}>
        {props.children}
      </article>
    </>
  )
}