import Link from 'next/link'
import { formatDate } from '../lib/format'

export default function ArticleList(props: {
  articles: {
    slug: string
    title: string
    date: string
  }[]
}) {
  return (
    <>
      {props.articles.map((a, index) => {
        return (
          <div key={index}>
            <Link href={`/articles/${a.slug}`}>
              <a>{a.title}</a>
            </Link>
            <div>Date: {formatDate(a.date)}</div>
          </div>
        )
      })}
    </>
  )
}