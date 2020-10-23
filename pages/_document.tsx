import Document, { Html, Head, Main, NextScript } from 'next/document'
import { siteName } from '../config/blog.config.json'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Orbitron:wght@900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}