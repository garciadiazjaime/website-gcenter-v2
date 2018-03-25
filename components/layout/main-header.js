import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import AppBar from 'material-ui/AppBar'

const style = {
  backgroundColor: '#343740',
}

const titleStyle = {
  fontSize: '24px',
  lineHeight: '20px',
  margin: '12px 0 6px',
  height: 'auto',
  whiteSpace: 'initial'
}

const cityStyle = {
  fontSize: '18px'
}

const titleEl = city => (<div>Reporte de Garitas <span style={cityStyle}>{city}</span></div>)

const MainHeader = ({ city }) => (
  <AppBar title={titleEl(city)}  style={style} titleStyle={titleStyle} />
);

MainHeader.propTypes = {
  city: PropTypes.string.isRequired,
};

export default MainHeader;
