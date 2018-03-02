import React from 'react'
import Head from 'next/head'

import MainHeader from './main-header'
import MainMenu from './main-menu'

const Layout = ({ url, children }) => (
  <div>
    <Head>
      <title>GaritaCenter - Reporte de Garitas para San Ysidro y Otay | Tijuana</title>
      <meta name="description" content="Reporte de Garitas en Tijuana / San Diego para la Garita de San Ysidrio y Otay. Garitacenter, tiempo en línea fronteriza." />
    </Head>

    <MainHeader city="Tijuana / San Diego" />
    <MainMenu url={url} />

    {children}

    <style jsx global>{`
      body {
        background-color: #343740;
        margin: 0;
        font-family: Helvetica Neue, Helvetica,Arial,sans-serif;
      }

      a {
        text-decoration: none;
      }
    `}
    </style>
  </div>
)

export default Layout
