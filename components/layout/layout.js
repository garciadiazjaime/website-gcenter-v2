import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'

import MainHeader from './main-header';
import MainMenu from './main-menu';
import MainFooter from './main-footer';

const Layout = (props) => (
  <div>
    <Head>
      <title>gcenter</title>
      <link rel="icon" href="/static/images/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <MainHeader city="Tijuana / San Diego" />
    <MainMenu url={props.url} />

    {props.children}

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
);

Layout.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Layout
