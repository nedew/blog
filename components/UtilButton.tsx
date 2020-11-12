import Link from 'next/link'
import styles from './styles/utilButton.module.scss'

export default function TagList({
  children,
  path
}: {
  children: React.ReactNode
  path: string
}) {
  return (
    <div className={styles.wrapper}>
      <Link href={path}>
        <a className={styles.button}>{children}</a>
      </Link>
    </div>
  )
}