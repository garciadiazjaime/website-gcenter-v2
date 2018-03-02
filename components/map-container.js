import React, { Component } from 'react'
import { Map, Marker } from 'google-maps-react'

import { getUserLocation } from '../services/report'

class MapContainer extends Component {
  constructor(args) {
    super(args)
    this.fetchPlaces = this.fetchPlaces.bind(this)
  }

  state = {
    userLocations: []
  }

  async fetchPlaces() {
    const userLocations = await getUserLocation()
    this.setState({
      userLocations
    })
  }

  renderMarkers(locations) {
    return locations.length ? locations.map(location => (<Marker
      key={location.uuid}
      position={{
        lat: location.latitude,
        lng: location.longitude
      }}
    />)) : null
  }

  render() {
    const { google } = this.props
    const { userLocations } = this.state
    return (
      <Map
        google={google}
        initialCenter={{
          lat: 32.5423139,
          lng: -117.0307815
        }}
        zoom={15}
        onReady={this.fetchPlaces}
      >
        {this.renderMarkers(userLocations)}
      </Map>
    )
  }
}

export default MapContainer
