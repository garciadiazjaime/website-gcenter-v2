import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import { proxyUrl } from '../services/report'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html lang="es">
        <Head>
          <link rel="icon" href="/static/images/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            dangerouslySetInnerHTML={{ __html: `window.proxyUrl = "${proxyUrl}"` }} // eslint-disable-line
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
