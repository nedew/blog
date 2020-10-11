import Layout from '../../components/Layout'
import ArticleList from '../../components/ArticleList'
import { GetStaticProps, GetStaticPaths } from 'next'
import tagMap from '../../gen/tagMap.json'

type Props = {
  tag: string
  articles: {
    slug: string
    title: string
    date: string
  }[]
}

export default (props: Props) => {
  return (
    <>
      <Layout>
        <h2>Tag: {props.tag}</h2>
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
      articles: tagMap[tag],
    }
  }
}