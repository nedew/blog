import Link from 'next/link'

export default function TagList(props: {
  tags: string[]
}) {
  return (
    <>
      {props.tags.map((tag, index) => {
        return (
          <Link href={`/tags/${tag}`} key={index}>
            <a><div>{tag}</div></a>
          </Link>
        )
      })}
    </>
  )
}