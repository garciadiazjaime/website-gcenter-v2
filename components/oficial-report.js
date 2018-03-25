import React from 'react'
import PropTypes from 'prop-types'

import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const titleStyle = {
  fontSize: '18px',
  padding: '0 0 0 12px'
}

const titleStyleSecondary = Object.assign({}, titleStyle, {
  opacity: '0.7'
})

const typeWrapperStyle = {
  height: 'auto',
}

const typeStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  height: '28px'
}

const valueStyle = {
  fontSize: '30px'
}

const valueStylePrimary = Object.assign({}, valueStyle, {
  color: '#1B8ECE'
})

const timeStyle = {
  fontSize: '14px',
  opacity: '0.7',
  left: '100px',
  position: 'absolute'
}

const Report = ({ report }) => {
  return report.length ? (
    <Table>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn />
          <TableRowColumn style={titleStyle}>San Ysidro</TableRowColumn>
          <TableRowColumn style={titleStyle}>Otay</TableRowColumn>
        </TableRow>
        <TableRow displayBorder={false} style={typeWrapperStyle}>
          <TableRowColumn style={typeStyle} colSpan="3">Carros <span style={timeStyle}>Espera en Minutos</span></TableRowColumn>
        </TableRow>
        <TableRow displayBorder={false}>
          <TableRowColumn style={titleStyleSecondary}>Normal</TableRowColumn>
          <TableRowColumn style={valueStylePrimary}>{report[0].content.car.normal.time}</TableRowColumn>
          <TableRowColumn style={valueStyle}>{report[1].content.car.normal.time}</TableRowColumn>
        </TableRow>
        <TableRow displayBorder={false}>
          <TableRowColumn style={titleStyleSecondary}>Ready Lane</TableRowColumn>
          <TableRowColumn style={valueStylePrimary}>{report[0].content.car.readyLine.time}</TableRowColumn>
          <TableRowColumn style={valueStyle}>{report[1].content.car.readyLine.time}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn style={titleStyleSecondary}>Sentry</TableRowColumn>
          <TableRowColumn style={valueStylePrimary}>{report[0].content.car.sentry.time}</TableRowColumn>
          <TableRowColumn style={valueStyle}>{report[1].content.car.sentry.time}</TableRowColumn>
        </TableRow>

        <TableRow displayBorder={false} style={typeWrapperStyle}>
          <TableRowColumn style={typeStyle} colSpan="3">Personas <span style={timeStyle}>Espera en Minutos</span></TableRowColumn>
        </TableRow>
        <TableRow displayBorder={false}>
          <TableRowColumn style={titleStyleSecondary}>Normal</TableRowColumn>
          <TableRowColumn style={valueStylePrimary}>{report[0].content.people.normal.time}</TableRowColumn>
          <TableRowColumn style={valueStyle}>{report[1].content.people.normal.time}</TableRowColumn>
        </TableRow>
        <TableRow displayBorder={false}>
          <TableRowColumn style={titleStyleSecondary}>Ready Lane</TableRowColumn>
          <TableRowColumn style={valueStylePrimary}>{report[0].content.people.readyLine.time}</TableRowColumn>
          <TableRowColumn style={valueStyle}>{report[1].content.people.readyLine.time}</TableRowColumn>
        </TableRow>
        <TableRow displayBorder={false}>
          <TableRowColumn style={titleStyleSecondary}>Sentry</TableRowColumn>
          <TableRowColumn style={valueStylePrimary}>{report[0].content.people.normal.time}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  ) : null
}

Report.propTypes = {
  report: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Report
