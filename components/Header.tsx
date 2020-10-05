import Link from 'next/link'
import styles from './layout.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <a>BLOG</a>
      </Link>
    </header>
  )
}