import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Audiowide&family=Mitr&family=Varela+Round&family=Bungee&family=Righteous&family=Russo+One&family=Luckiest+Guy&family=Montserrat+Alternates:wght@800;900&family=Six+Caps&family=Alegreya+Sans+SC:wght@900&display=swap" rel="stylesheet" /> */}
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