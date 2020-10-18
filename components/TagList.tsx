import Link from 'next/link'
import styles from './styles/taglist.module.scss'

export default function TagList(props: {
  tags: string[]
}) {
  return (
    <ul className={styles.tags}>
      {props.tags.map((tag, index) => {
        return (
          <li className={styles.tag} key={index}>
            <Link href={`/tags/${tag}`}>
              <a>{tag}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}