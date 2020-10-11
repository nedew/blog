import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import TagList from '../../components/TagList'
import tagMap from '../../gen/tagMap.json'

// /tags page
export default ({ tags }: { tags: string[] }) => {
  return (
    <>
      <Layout>
        <h1>タグR</h1>
        <TagList tags={tags} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      tags: Object.keys(tagMap),
    }
  }
}