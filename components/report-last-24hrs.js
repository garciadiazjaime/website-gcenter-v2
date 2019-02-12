import React from 'react'
import PropTypes from 'prop-types'

import BarChart from './graphs/BarChart'

const Report = ({ report }) => {
  return (
    <section>
      <div className="row">
        <h1>Últimas 24 horas San Ysidro</h1>
        <h3>Cruce en carro</h3>
      </div>
      <div>
        {
          Object.keys(report).length ?
            <BarChart data={report} /> : null
        }
      </div>
      
      <style jsx>{`
        section {
          background-color: white;
          padding: 10px 5px;
        }
        
        h1 {
          margin: 0;
          font-size: 1.4em;
        }

        h2 {
          margin: 0;
          font-size: 1em;
        }


        h3 {
          margin: 0  0 6px 0;
          color: #343740;
          font-weight: normal;
          font-size: 1em;
        }

        h4 {
          margin: 0;
          opacity: 0.6;
          font-weight: normal;
          line-height: 2.5em;
          font-size: 0.8em;
        }

        h5 {
          margin: 0;
        }

        span {
          font-size: 1.8em;
          font-weight: bold;
          color: black;
          display: block;
        }

        .type-a {
          color: #1b8ece;
        }
      `}
      </style>
    </section>
  )
}

Report.propTypes = {
  report: PropTypes.shape({}).isRequired,
}

export default Report
