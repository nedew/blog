import Link from 'next/link'

export default function Tag(props: {
  tags: string[]
}) {
  return (
    <>
      {props.tags.map((tag, index) => {
        return (
          <Link href={`/tags/${tag}`} key={index}>
            <a>{tag}</a>
          </Link>
        )
      })}
    </>
  )
}