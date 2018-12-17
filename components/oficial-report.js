import React from 'react'
import PropTypes from 'prop-types'

function getReport(report) {
  return report && report.length ? report : [{
    content: {
      car: {
        normal : {},
        readyLine: {},
        sentry: {}
      },
      people: {
        normal : {},
        readyLine: {},
        sentry: {}
      }
    }
  }, {
    content: {
      car: {
        normal : {},
        readyLine: {},
        sentry: {}
      },
      people: {
        normal : {},
        readyLine: {},
        sentry: {}
      }
    }
  }]
}

const Report = ({ report }) => {
  const data = getReport(report)
  const { content: sanYsidro } = data[0]
  const { content: otay } = data[1]

  return (
    <section>
      <div className="row">
        <div />
        <div><h3>San Ysidro</h3></div>
        <div><h3>Otay</h3></div>
      </div>
      <div className="row">
        <h5>Carros</h5>
      </div>
      <div className="row">
        <div><h4>Normal</h4></div>
        <div><span className="type-a">{sanYsidro.car.normal.time}</span></div>
        <div><span>{otay.car.normal.time}</span></div>
      </div>
      <div className="row">
        <div><h4>Ready Lane</h4></div>
        <div><span className="type-a">{sanYsidro.car.readyLine.time}</span></div>
        <div><span>{otay.car.readyLine.time}</span></div>
      </div>
      <div className="row">
        <div><h4>Sentry</h4></div>
        <div><span className="type-a">{sanYsidro.car.sentry.time}</span></div>
        <div><span>{otay.car.sentry.time}</span></div>
      </div>

      <br />

      <h5>Personas</h5>
      <div className="row">
        <div><h4>Normal</h4></div>
        <div><span className="type-a">{sanYsidro.people.normal.time}</span></div>
        <div><span>{otay.people.normal.time}</span></div>
      </div>
      <div className="row">
        <div><h4>Ready Lane</h4></div>
        <div><span className="type-a">{sanYsidro.people.readyLine.time}</span></div>
        <div><span>{otay.people.readyLine.time}</span></div>
      </div>
      <div className="row">
        <div><h4>Pedwest</h4></div>
        <div><span className="type-a">{sanYsidro.people.normal.time}</span></div>
        <div />
      </div>
      <style jsx>{`
        section {
          background-color: white;
          padding: 15px 5px;
        }

        .row {
          display: flex;
        }

        .row div {
          flex: 1;
        }

        h3 {
          margin: 0;
          color: #343740;
          font-weight: normal;
          text-align: center;
        }

        h4 {
          margin: 0;
          opacity: 0.6;
          font-weight: normal;
          line-height: 2.5em;
        }

        h5 {
          margin: 0;
        }

        span {
          font-size: 1.8em;
          font-weight: bold;
          color: black;
          text-align: center;
          display: block;
        }

        .type-a {
          color: #1b8ece;
        }

        p {
          font-size: .6em;
          opacity: 0.6;
        }
      `}
      </style>
    </section>
  )
}

Report.propTypes = {
  report: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Report
