import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
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
      </Head>
      <div className={styles.area}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}