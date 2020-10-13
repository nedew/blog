import Link from 'next/link'
import styles from './styles/header.module.scss'
import blogConfig from '../config/blog.json'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href={'/'}>
            <a className={styles.siteTitle}>{blogConfig.siteName}</a>
          </Link>
        </div>
      </header>
    </>
  )
}