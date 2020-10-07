import Layout from '../../components/Layout'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllTag } from '../../lib/tagUtil'

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
  const paths = getAllTag()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      tag: params.tag
    }
  }
}