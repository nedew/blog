import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import UtilButton from '../components/UtilButton'
import utilStyles from '../components/styles/util.module.scss'
import { getSortedArticles } from '../lib/getArticle'
import tagMap from '../gen/tagMap.json'
import { siteName } from '../config/blog.config.json'

export default ({ tags, latestArticles }) => {

  return (
    <>
      <Head>
        <title>{siteName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className={utilStyles.pageTitle}>LATEST</h1>
        <ArticleList articles={latestArticles} />
        <UtilButton path='/articles'>MORE</UtilButton>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  return {
    props: {
      tags: Object.keys(tagMap),
      latestArticles: getSortedArticles(10)
    }
  }
}
