import '../styles/global.scss'
// import '../styles/prism.css'
// import '../styles/prism-vsc-dark-plus.css'
// import '../styles/prism-material-dark.css'
import '../styles/prism-nord.css'
import { AppProps } from 'next/app'

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
