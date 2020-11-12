import Link from 'next/link'
import styles from './styles/footer.module.scss'
import { name, profUrl } from '../config/blog.config.json'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.copyright}>
          <span>© 2020 Created by <a href={profUrl} className={styles.me}>{name}</a></span>
        </div>
      </div>
    </footer>
  )
}