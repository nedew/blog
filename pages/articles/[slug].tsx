import React from "react"
import Layout from '../../components/Layout'
import Article from '../../components/Article'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetStaticProps, GetStaticPaths } from 'next'
import articleIds from '../../gen/articleIds.json'
import { siteUrl } from '../../config/blog.config.json'

// const articleDir = path.join(process.cwd(), 'articles')
type Props = {
  fileName: string
  slug: string
  title: string
  date: string
  tags: string[]
}

export default (props: Props) => {
  // const MDX = dynamic(() => import(`../../articles/${props.fileName}`))

  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href='/css/prism.css' /> */}

        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.title} />
        <meta property="og:url" content={`${siteUrl}articles/${props.slug}`} />
        <meta property="og:image" content={`${siteUrl}ogp/${props.slug}.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout title={props.title} overwriteOgp={true}>
        <Article
          slug={props.slug}
          title={props.title}
          date={props.date}
          tags={props.tags}
        >
          {/* <MDX /> */}
        </Article>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(articleIds).map(id => {
    return {
      params: {
        slug: id
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string
  const fileName = articleIds[slug]
  // const data = articleList[slug]
  const { frontMatter } = await import(`../../articles/${fileName}`)
  return {
    props: {
      fileName,
      slug,
      ...frontMatter
    }
  }
}