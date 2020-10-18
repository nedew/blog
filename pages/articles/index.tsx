import Head from 'next/head'
import Layout from '../../components/Layout'
import ArticleList from '../../components/ArticleList'
import utilStyles from '../../components/styles/util.module.scss'
import articles from '../../gen/articles.json'
import { siteName } from '../../config/blog.config.json'

export default () => {
  const items = articles.map(item => {
    return {
      slug: item.slug,
      title: item.fm.title,
      date: item.fm.date,
    }
  })

  return (
    <>
      <Head>
        <title>ARTICLES | {siteName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className={utilStyles.pageTitle}>ARTICLES</h1>
        <ArticleList articles={items} />
      </Layout>
    </>
  )
}