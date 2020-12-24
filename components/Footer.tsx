import Link from 'next/link'
import styles from './styles/footer.module.scss'
import { name, profUrl, siteName } from '../config/blog.config.json'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <Link href='/articles'>
            <a>ARTICLES</a>
          </Link>
          <Link href='/tags'>
            <a>TAGS</a>
          </Link>
          <a href={profUrl}>ABOUT ME</a>
        </div>
        <div className={styles.copyright}>
          © 2020 {siteName}
        </div>
      </div>
    </footer>
  )
}