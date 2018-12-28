import React, { Component } from 'react'
import Head from 'next/head'

import MainHeader from './main-header'
import MainFooter from './main-footer'


class Layout extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    const { meta } = this.props

    return (
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Head>

        <MainHeader city={meta.cities.header} />


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

        <MainFooter cities={meta.cities} />

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
