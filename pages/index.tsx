import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import TagList from '../components/TagList'
import { getLatestArticles } from '../lib/getArticle'
import tagMap from '../gen/tagMap.json'

export default ({ tags, latestArticles }) => {

  return (
    <>
      <Head>
        <title>nedew.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ArticleList articles={latestArticles} />
        {/* <TagList tags={tags}/> */}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  return {
    props: {
      tags: Object.keys(tagMap),
      latestArticles: getLatestArticles()
    }
  }
}
