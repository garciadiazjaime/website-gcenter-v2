import React from 'react'
import PropTypes from 'prop-types'

import { getEntryTime } from '../services/report';


const Report = ({ report }) => {
  return (
    <section>
      <div className="row">
        <div />
        <div><h3>Bridge I</h3></div>
        <div><h3>Bridge II</h3></div>
      </div>
      <div className="row">
        <h5>Carros</h5>
      </div>
      <div className="row">
        <div><h4>Normal</h4></div>
        <div>
          <span className="type-a">
            {getEntryTime(report.report, 'bridgeI.vehicle.standard.time')}
          </span>
        </div>
        <div>
          <span>
            {getEntryTime(report.report, 'bridgeII.vehicle.standard.time')}
          </span>
        </div>
      </div>
      <div className="row">
        <div><h4>Ready Lane</h4></div>
        <div>
          <span className="type-a">
            {getEntryTime(report.report, 'bridgeI.vehicle.readyLane.time')}
          </span>
        </div>
        <div>
          <span>
            {getEntryTime(report.report, 'bridgeII.vehicle.readyLane.time')}
          </span>
        </div>
      </div>
      <div className="row">
        <div><h4>Sentry</h4></div>
        <div>
          <span className="type-a">
            {getEntryTime(report.report, 'bridgeI.vehicle.sentri.time')}
          </span>
        </div>
        <div>
          <span>
            {getEntryTime(report.report, 'bridgeII.vehicle.sentri.time')}
          </span>
        </div>
      </div>

      <br />

      <h5>Personas</h5>
      <div className="row">
        <div><h4>Normal</h4></div>
        <div>
          <span className="type-a">
            {getEntryTime(report.report, 'bridgeI.pedestrian.standard.time')}
          </span>
        </div>
        <div>
          <span>
            {getEntryTime(report.report, 'bridgeII.pedestrian.standard.time')}
          </span>
        </div>
      </div>
      <style jsx>{`
        section {
          background-color: white;
          padding: 10px 5px;
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
  report: PropTypes.shape({}).isRequired,
}

export default Report
