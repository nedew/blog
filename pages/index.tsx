import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import UtilButton from '../components/UtilButton'
import utilStyles from '../components/styles/util.module.scss'
import { getSortedArticles } from '../lib/getArticle'
import tagMap from '../gen/tagMap.json'
import { siteName, getLatestNumber } from '../config/blog.config.json'

export default ({ latestArticles }: {
  latestArticles: {
    slug: string
    title: string
    date: string
  }[]
}) => {

  return (
    <>
      <Layout>
        <h1 className={utilStyles.pageTitle}>LATEST</h1>
        <ArticleList articles={latestArticles} />
        {latestArticles.length >= getLatestNumber && (
          <UtilButton path='/articles'>MORE</UtilButton>
        )}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      tags: Object.keys(tagMap),
      latestArticles: getSortedArticles(getLatestNumber)
    }
  }
}
