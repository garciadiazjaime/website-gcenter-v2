import React, { Component } from 'react'
import Head from 'next/head'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import MainHeader from './main-header'
import MainFooter from './main-footer'


class Layout extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Head>
            <title>GaritaCenter - Reporte de Garitas para San Ysidro y Otay | Tijuana</title>
            <meta name="description" content="Reporte de Garitas en Tijuana / San Diego para la Garita de San Ysidrio y Otay. Garitacenter, tiempo en línea fronteriza." />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          </Head>

          <MainHeader city="Tijuana / San Diego" />

          {this.props.children}

          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2643588035417760"
            data-ad-slot="8651758334"
            data-ad-format="auto"
          />

          <MainFooter />

          <style jsx global>{`
            body {
              margin: 0;
            }

            a {
              text-decoration: none;
            }
          `}
          </style>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Layout
