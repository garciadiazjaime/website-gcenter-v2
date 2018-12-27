import React from 'react'
import PropTypes from 'prop-types'

function getEntryTime(ports, keyString) {
  if (!ports || !keyString) {
    return null
  }

  const value = keyString.split('.').reduce((item, key) => {
    if (item && item[key]) {
      return item[key]
    }
    return ''
  }, ports)

  return value
}

const Report = ({ report }) => {
  return (
    <section>
      <div className="row">
        <h3>El Paso - Paso Del Norte (PDN)</h3>
      </div>
      <div className="row">
        <h5>Carros</h5>
        <h5>Carros</h5>
        <h5 className="type-a">Personas</h5>
        <h5 className="type-a">Personas</h5>
      </div>
      <div className="row">
        <h4>Normal</h4>
        <h4>Ready Lane</h4>
        <h4>Normal</h4>
        <h4>Ready Lane</h4>
      </div>
      <div className="row">
        <span>{getEntryTime(report.report, 'pasoNorte.vehicle.standard.time')}</span>
        <span>{getEntryTime(report.report, 'pasoNorte.vehicle.readyLane.time')}</span>
        <span className="type-a">{getEntryTime(report.report, 'pasoNorte.pedestrian.standard.time')}</span>
        <span className="type-a">{getEntryTime(report.report, 'pasoNorte.pedestrian.readyLane.time')}</span>
      </div>

      <br />

      <div className="row">
        <h3>El Paso - Ysleta </h3>
      </div>
      <div className="row">
        <h5>Carros</h5>
        <h5>Carros</h5>
        <h5>Carros</h5>
        <h5 className="type-a">Personas</h5>
      </div>
      <div className="row">
        <h4>Normal</h4>
        <h4>Ready Lane</h4>
        <h4>Sentri</h4>
        <h4>Ready Lane</h4>
      </div>
      <div className="row">
        <span>{getEntryTime(report.report, 'ysleta.vehicle.standard.time')}</span>
        <span>{getEntryTime(report.report, 'ysleta.vehicle.readyLane.time')}</span>
        <span>{getEntryTime(report.report, 'ysleta.vehicle.sentri.time')}</span>
        <span className="type-a">{getEntryTime(report.report, 'ysleta.pedestrian.standard.time')}</span>
      </div>

      <br />

      <div className="row">
        <h3>El Paso - Bridge of the Americas (BOTA) </h3>
      </div>
      <div className="row">
        <h5>Carros</h5>
        <h5>Carros</h5>
        <h5 className="type-a">Personas</h5>
        <h5>&nbsp;</h5>
      </div>
      <div className="row">
        <h4>Normal</h4>
        <h4>Ready Lane</h4>
        <h4>Normal</h4>
        <h4>&nbsp;</h4>
      </div>
      <div className="row">
        <span>{getEntryTime(report.report, 'bridgeAmericas.vehicle.standard.time')}</span>
        <span>{getEntryTime(report.report, 'bridgeAmericas.vehicle.readyLane.time')}</span>
        <span className="type-a">{getEntryTime(report.report, 'bridgeAmericas.pedestrian.standard.time')}</span>
        <span>&nbsp;</span>
      </div>

      <br />

      <div className="row">
        <h3>El Paso - Stanton DCL</h3>
      </div>
      <div className="row">
        <h5>Carros</h5>
      </div>
      <div className="row">
        <h4>Sentri</h4>
      </div>
      <div className="row">
        <span>{getEntryTime(report.report, 'stanton.vehicle.sentri.time')}</span>
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
