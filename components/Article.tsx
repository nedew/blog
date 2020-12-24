import { formatDate } from '../lib/format'
import Tags from './Tags'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/article.module.scss'
import blogConfig from '../config/blog.config.json'

export default function Article(props: {
  children: React.ReactNode
  slug: string
  title: string
  date: string
  tags: string[]
}) {
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.info}>
        <Link href={blogConfig.twitterUrl}>
          <a className={styles.authorIcon}>
            <Image
              src='/img/icon.png'
              alt={blogConfig.name}
              width={38}
              height={38}
              className={styles.authorIconImg}
            />
          </a>
        </Link>
        <Link href={blogConfig.twitterUrl}>
          <a className={styles.authorName}>@{blogConfig.name}</a>
        </Link>
        <div className={styles.date}>{formatDate(props.date)}</div>
      </div>
      <Tags tags={props.tags} />
      <article className={styles.article}>
        {props.children}
      </article>
    </>
  )
}