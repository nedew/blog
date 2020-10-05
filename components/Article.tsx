import { parse, format } from 'date-fns'
import Tag from './Tag'

export default function Article(props: {
  children: React.ReactNode
  title: string
  date: string
  tags: string[]
}) {
  const fmtDate = parse(props.date, 'yyyy-MM-dd-HH-mm', new Date())
  return (
    <>
      <h1>{props.title}</h1>
      <div>Date: {format(fmtDate, 'yyyy/MM/dd HH:mm')}</div>
      <Tag tags={props.tags} />
      <article>
        {props.children}
      </article>
    </>
  )
}