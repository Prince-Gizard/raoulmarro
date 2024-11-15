import NextDocument, { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
