import Head from 'next/head'
import Layout from '../../components/Layout'
import ArticleList from '../../components/ArticleList'
import utilStyles from '../../components/styles/util.module.scss'
import { getSortedArticles } from '../../lib/getArticle'
import { siteName } from '../../config/blog.config.json'

const Articles = () => {
  const items = getSortedArticles()

  return (
    <>
      <Layout title={'ARTICLES'}>
        <h1 className={utilStyles.pageTitle}>ARTICLES</h1>
        <ArticleList articles={items} />
      </Layout>
    </>
  )
}

export default Articles