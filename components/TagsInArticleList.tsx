import Link from 'next/link'
import styles from './styles/tagsInArticleList.module.scss'

export default function Tag(props: {
  tags: string[]
}) {
  return (
    <div className={styles.articleTags}>
      {props.tags.map((tag, index) => {
        return (
          <Link href={`/tags/${tag}`} key={index}>
            <a className={styles.tag}>{tag}</a>
          </Link>
        )
      })}
    </div>
  )
}