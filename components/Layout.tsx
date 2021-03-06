import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { siteName, siteUrl } from '../config/blog.config.json'
import styles from './styles/layout.module.scss'

export default function Layout({
  children,
  title,
  overwriteOgp = false
}: {
  children: React.ReactNode
  title?: string
  overwriteOgp?: boolean
}) {
  const pageTitle = title !== undefined
        ? title + ' | ' + siteName
        : siteName

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {!overwriteOgp && (
          <>
            <meta property="og:locale" content="ja_JP" />
            <meta property="og:site_title" content={siteName} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content="nedewのブログ" />
            <meta property="og:image" content={`${siteUrl}icon-512x512.png`} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
          </>
        )}
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