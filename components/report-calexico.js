import React from 'react'
import PropTypes from 'prop-types'

function getReport(report) {
  return report && report.length ? report[0] : {
    report: {
      east: {
        standard: {
          vehicle: {},
        },
        readyLane: {
          vehicle: {},
        }
      },
      west: {
        readyLane: {
          pedestrian: {},
        },
        sentri: {
          vehicle: {},
        },
        standard: {
          vehicle: {},
          pedestrian: {},
        },
      }
    }
  }
}

const Report = ({ report }) => {
  const data = getReport(report)
  const {
    report: {
      east: port1,
      west: port2,
    }
  } = data

  return (
    <section>
      <div className="row">
        <div />
        <div><h3>West</h3></div>
        <div><h3>East</h3></div>
      </div>
      <div className="row">
        <h5>Carros</h5>
      </div>
      <div className="row">
        <div><h4>Normal</h4></div>
        <div><span className="type-a">{port2.standard.vehicle.time}</span></div>
        <div><span>{port1.standard.vehicle.time}</span></div>
      </div>
      <div className="row">
        <div><h4>Sentry</h4></div>
        <div><span className="type-a">{port2.sentri.vehicle.time}</span></div>
        <div />
      </div>
      <div className="row">
        <div><h4>Ready Lane</h4></div>
        <div />
        <div><span>{port1.readyLane.vehicle.time}</span></div>
      </div>

      <br />

      <h5>Personas</h5>
      <div className="row">
        <div><h4>Normal</h4></div>
        <div><span className="type-a">{port2.standard.pedestrian.time}</span></div>
        <div />
      </div>
      <div className="row">
        <div><h4>Pedwest</h4></div>
        <div><span className="type-a">{port2.readyLane.pedestrian.time}</span></div>
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
