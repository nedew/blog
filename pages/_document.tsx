import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Audiowide&family=Mitr&family=Varela+Round&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap" rel="stylesheet" />
          {/* <link href='../styles/prism.css' rel='stylesheet' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}