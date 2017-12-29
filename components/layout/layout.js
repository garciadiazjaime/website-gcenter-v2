import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'

import MainHeader from './main-header';
import MainMenu from './main-menu';
import MainFooter from './main-footer';

class Layout extends Component {

  componentDidMount() {
    window.dataLayer = window.dataLayer || []
    const gtag = () => {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'UA-26633604-1')
  }

  render() {
    return (
      <div>
        <Head>
          <title>GaritaCenter - Reporte de Garitas para San Ysidro y Otay | Tijuana</title>
          <meta name="description" content="Reporte de Garitas en Tijuana / San Diego para la Garita de San Ysidrio y Otay. Garitacenter, tiempo en línea fronteriza." />
        </Head>

        <MainHeader city="Tijuana / San Diego" />
        <MainMenu url={this.props.url} />

        {this.props.children}

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
        `}
        </style>
      </div>
    )
  }
}

Layout.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Layout
