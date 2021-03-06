import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import injectTapEventPlugin from 'react-tap-event-plugin'

import { apiUrl } from '../services/report'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  componentDidMount() {
    injectTapEventPlugin()
  }

  render() {
    return (
      <html lang="es">
        <Head>
          <link rel="icon" href="/static/images/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            dangerouslySetInnerHTML={{ __html: `window.apiUrl = "${apiUrl}"; window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-26633604-1');` }} // eslint-disable-line
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-26633604-1" />
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        </body>
      </html>
    )
  }
}
