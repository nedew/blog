import Link from 'next/link'
import styles from './styles/taglist.module.scss'

export default function TagList(props: {
  tags: {
    name: string
    number: string
  }[]
}) {
  return (
    <ul className={styles.tags}>
      {props.tags.map((tag, index) => {
        return (
          <li className={styles.tag} key={index}>
            <Link href={`/tags/${tag.name}`}>
              <a>{tag.name}（{tag.number}）</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}