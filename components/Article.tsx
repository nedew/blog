import { formatDate } from '../lib/format'
import ArticlePageTag from './ArticlePageTag'

export default function Article(props: {
  children: React.ReactNode
  title: string
  date: string
  tags: string[]
}) {
  return (
    <>
      <h1>{props.title}</h1>
      <div>Date: {formatDate(props.date)}</div>
      <ArticlePageTag tags={props.tags} />
      <article>
        {props.children}
      </article>
    </>
  )
}