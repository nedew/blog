import Layout from '../../components/Layout'
import ArticleList from '../../components/ArticleList'
import Head from 'next/head'
import utilStyles from '../../components/styles/util.module.scss'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getSortedArticles } from '../../lib/getArticle'
import tagMap from '../../gen/tagMap.json'
import { siteName } from '../../config/blog.config.json'

type Props = {
  tag: string
  articles: {
    slug: string
    title: string
    date: string
  }[]
}

const TagPage = (props: Props) => {
  return (
    <>
      <Layout title={props.tag}>
        <h1 className={utilStyles.pageTitle}>TAG: {props.tag}</h1>
        <ArticleList articles={props.articles} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(tagMap).map(tag => {
    return {
      params: { tag }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params.tag as string
  return {
    props: {
      tag: tag,
      articles: getSortedArticles(),
    }
  }
}

export default TagPage