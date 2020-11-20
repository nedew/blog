import { formatDate } from '../lib/format'
import ArticlePageTag from './ArticlePageTag'
import styles from './styles/article.module.scss'
import Head from 'next/head'
import { siteUrl } from '../config/blog.config.json'

export default function Article(props: {
  children: React.ReactNode
  slug: string
  title: string
  date: string
  tags: string[]
}) {
  return (
    <>
      <Head>
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.title} />
        <meta property="og:url" content={`${siteUrl}articles/${props.slug}`} />
        <meta property="og:image" content={`${siteUrl}ogp/${props.slug}.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.date}>{formatDate(props.date)}</div>
      <h1 className={styles.title}>{props.title}</h1>
      <ArticlePageTag tags={props.tags} />
      <article className={styles.article}>
        {props.children}
      </article>
    </>
  )
}