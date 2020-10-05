import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from './layout.module.scss'

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
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}