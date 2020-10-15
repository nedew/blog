import '../styles/global.scss'
import '../styles/prism.css'
import { AppProps } from 'next/app'

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
