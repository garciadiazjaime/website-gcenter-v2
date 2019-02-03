import React from 'react'
import PropTypes from 'prop-types'

import BarChart from './graphs/BarChart'

const Report = ({ report }) => {
  return (
    <section>
      <div className="row">
        <h3>Reporte de Garitas de los Últimos 7 días</h3>
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

        .row {
          display: flex;
        }

        .row h4, .row h5, .row h4, .row span {
          flex: 1;
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
