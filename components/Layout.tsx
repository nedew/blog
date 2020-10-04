import Head from 'next/head'
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
      <header className={styles.header}>
        <div>This is header!</div>
      </header>
      <main className={styles.container}>{children}</main>
      <footer className={styles.footer}>
        <div>This is footer?</div>
      </footer>
    </>
  )
}