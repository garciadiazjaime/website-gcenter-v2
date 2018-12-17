import React, { Component } from 'react'
import { GoogleApiWrapper } from 'google-maps-react';
import 'isomorphic-unfetch'

import LayoutMap from '../components/layout/layout-map'
import MapContainer from '../components/map-container'

class MapPage extends Component {
  state = {
    showMap: false
  }

  componentDidMount() {
    this.setState({ showMap: true }) // eslint-disable-line
  }

  render() {
    const { showMap } = this.state
    return (
      <LayoutMap>
        { showMap ? <MapWrapper /> : null}
      </LayoutMap>
    )
  }
}

const MapWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyBlAO455iNxc_vrtlP2cCaSDxKfkinFD4E'
})(MapContainer)

export default MapPage
