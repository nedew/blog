import Link from 'next/link'
import styles from './styles/footer.module.scss'
import { name, profUrl, siteName } from '../config/blog.config.json'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.copyright}>
          {/* <span>© 2020 Made by <a href={profUrl} className={styles.me}>{name}</a></span> */}
          © 2020 {siteName}
        </div>
        <div className={styles.footerLinks}>
          <Link href='/articles'>
            <a>ARTICLES</a>
          </Link>
          <Link href='/tags'>
            <a>TAGS</a>
          </Link>
          <a href={profUrl}>ABOUTME</a>
        </div>
      </div>
    </footer>
  )
}