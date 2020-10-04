export default function Article(props: {
  children: React.ReactNode
  title: string
  date: string
}) {
  return (
    <>
      <h1>{props.title}</h1>
      <div>{props.date}</div>
      <article>
        {props.children}
      </article>
    </>
  )
}