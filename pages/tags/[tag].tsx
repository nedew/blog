import Layout from '../../components/Layout'
import { GetStaticProps, GetStaticPaths } from 'next'
import tagMap from '../../gen/tagMap.json'

type Props = {
  tag: string
}

export default (props: Props) => {
  return (
    <>
      <Layout>
        <div>{props.tag}</div>
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