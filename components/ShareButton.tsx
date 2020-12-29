import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/shareButton.module.scss'
import { name, siteUrl } from '../config/blog.config.json'

export default function ShareButton(props: { slug: string, title: string }) {
  const shareUrl = siteUrl + 'articles/' + props.slug
  const twitterUrl = 'https://twitter.com/intent/tweet?text='
    + props.title + ` %7C ${name}&url=%0d` + shareUrl

  const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl

  return (
    <div className={styles.shareButtons}>
      <Link href={encodeURI(twitterUrl)}>
        <a className={styles.button} target='_blank' rel='nofollow noopener noreferrer'>
          <Image src='/img/twitter-icon.png' alt='Twitter icon' width={34} height={34} />
        </a>
      </Link>
      <Link href={encodeURI(facebookUrl)}>
        <a className={styles.button} rel='nofollow noopener noreferrer'>
          <Image src='/img/facebook-icon.png' alt='Facebook icon' width={34} height={34} />
        </a>
      </Link>
    </div>
  )
}