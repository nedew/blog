// import Link from 'next/link'
import styles from './styles/footer.module.scss'
import config from '../config/blog.json'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.copyright}>© 2020 Created by <a href='https://www.nedew.net' className={styles.me}>nedew</a></div>
      </div>
    </footer>
  )
}