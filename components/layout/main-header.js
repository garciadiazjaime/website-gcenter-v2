import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

const MainHeader = ({ city }) => (
  <header>
    <Link href="/">
      <a>
        <img src="/static/images/garita-center-logo.jpg" alt="GaritaCenter - Reporte de Garitas" />
      </a>
    </Link>
    <div>
      <h1>Reporte de Garitas</h1>
      <h2>{city}</h2>
    </div>
    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        padding: 5px;
      }

      a {
        margin-right: 5px;
      }

      h1 {
        color: white;
        opacity: 0.6;
        margin: 0;
        font-size: 1em;
        font-weight: normal;
      }

      h2 {
        color: white;
        margin: 0;
        font-weight: normal;
      }
    `}
    </style>
  </header>
);

MainHeader.propTypes = {
  city: PropTypes.string.isRequired,
};

export default MainHeader;
