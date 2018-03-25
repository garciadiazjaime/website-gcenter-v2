import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

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

const clickHandler = (event, child) => {
  const { value } = child.props
  Router.push(value)
}

const menuEl = (
  <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon color="white" /></IconButton>
    }

    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
    onItemClick={clickHandler}
  >
    <MenuItem primaryText="Reporte Oficial" value="/" />
    <MenuItem primaryText="Reporte de Usuarios" value="/reporte-usuarios" />
    <MenuItem primaryText="Reporte de Ubicación" value="/reporte-cruce-fronterizo" />
  </IconMenu>
)

const MainHeader = ({ city }) => (
  <AppBar
    title={titleEl(city)}
    style={style}
    titleStyle={titleStyle}
    iconElementLeft={menuEl}
  />
);

MainHeader.propTypes = {
  city: PropTypes.string.isRequired,
};

export default MainHeader;
