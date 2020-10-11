import Head from 'next/head'
import Layout from '../../components/Layout'
import ArticleList from '../../components/ArticleList'
import articles from '../../gen/articles.json'

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
        <title>Articles - nedew.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>記事一覧</h1>
        <ArticleList articles={items} />
      </Layout>
    </>
  )
}