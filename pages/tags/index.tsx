import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import TagList from '../../components/TagList'
import utilStyles from '../../components/styles/util.module.scss'
import tagMap from '../../gen/tagMap.json'
import { siteName } from '../../config/blog.config.json'

// /tags page
export default ({ tags }: {
  tags: {
    name: string
    number: string
  }[]
}) => {
  return (
    <>
      <Head>
        <title>TAGS | {siteName}</title>
      </Head>
      <Layout>
        <h1 className={utilStyles.pageTitle}>TAGS</h1>
        <TagList tags={tags} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      tags: Object.keys(tagMap).map((tag) => {
        return { name: tag, number: String(tagMap[tag].length) }
      }),
    }
  }
}