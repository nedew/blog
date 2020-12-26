import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from './styles/header.module.scss'
import blogConfig from '../config/blog.config.json'

export default function Header() {
  const SwitchTheme = dynamic(() => import('./SwitchTheme'))
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href={'/'}>
            <a className={styles.siteTitle}>{blogConfig.siteName}</a>
          </Link>
          <SwitchTheme />
        </div>
      </header>
    </>
  )
}