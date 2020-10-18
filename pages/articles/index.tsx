import Head from 'next/head'
import Layout from '../../components/Layout'
import ArticleList from '../../components/ArticleList'
import utilStyles from '../../components/styles/util.module.scss'
import { getSortedArticles } from '../../lib/getArticle'
import { siteName } from '../../config/blog.config.json'

export default () => {
  const items = getSortedArticles()

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