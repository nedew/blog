import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { siteName } from '../config/blog.config.json'
import styles from './styles/layout.module.scss'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My Blog"
        />
        <meta property="og:site_title" content={siteName} />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.area}>
        <Header />
        <main className={styles.main}>
          <div className={styles.contents}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}