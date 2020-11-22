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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        {/* <meta
          name="description"
          content="My Blog"
        /> */}
        <meta property="og:site_title" content={siteName} />
        <meta property="og:image" content="/icon-512x512.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
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