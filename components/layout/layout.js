import React, { Component } from 'react'
import Head from 'next/head'

import MainHeader from './main-header'
import MainFooter from './main-footer'


class Layout extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    return (
      <div>
        <Head>
          <title>GaritaCenter - Reporte de Garitas para San Ysidro y Otay | Tijuana</title>
          <meta name="description" content="Reporte de Garitas en Tijuana / San Diego para la Garita de San Ysidrio y Otay. Garitacenter, tiempo en línea fronteriza." />
        </Head>

        <MainHeader city="Tijuana / San Diego" />


        {this.props.children}

        <div className="munchis">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2643588035417760"
            data-ad-slot="8651758334"
            data-ad-format="auto"
          />
        </div>

        <MainFooter />

        <style jsx global>{`
            body {
              background-color: #343740;
              margin: 0;
              font-family: Helvetica Neue, Helvetica,Arial,sans-serif;
            }

            a {
              text-decoration: none;
            }

            .munchis {
              margin-top: 20px;
              min-height: 42px;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Layout
