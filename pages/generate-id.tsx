import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import utilStyles from '../components/styles/util.module.scss'
import articleIds from '../gen/articleIds.json'
import { siteName } from '../config/blog.config.json'
import { generateUniqueId } from '../lib/generateUniqueId'

export default ({ uniqueId }: { uniqueId: string }) => {
  return (
    <>
      <Head>
        <title>Generate article id | {siteName}</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/js/generateArticleId.js"></script>
      </Head>
      <Layout>
        <h1 className={utilStyles.pageTitle}>GENERATE ID</h1>
        <h2>Unique ID: {uniqueId}</h2>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      uniqueId: generateUniqueId(Object.keys(articleIds)),
    }
  }
}