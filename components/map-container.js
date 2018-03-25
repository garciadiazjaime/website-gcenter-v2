import React, { Component } from 'react'
import { Map, Marker } from 'google-maps-react'

import { getUserLocation } from '../services/report'
import { getDistance } from '../utils/locationUtil'

const ports = {
  port1: {
    lat: 32.542513,
    lng:  -117.029159
  },
  port2: {
    lat: 32.550190,
    lng: -116.938251
  }
};

const limitClosetoPort = 1000

const filterLocations = locations => {
  return locations.filter(
    location =>
      getDistance(ports.port1.lat, ports.port1.lng, location.latitude, location.longitude) < limitClosetoPort ||
      getDistance(ports.port2.lat, ports.port2.lng, location.latitude, location.longitude) < limitClosetoPort
    )
}

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
      userLocations: filterLocations(userLocations)
    })
  }

  renderMarkers(locations) {
    return locations.length ? locations.map(location => (<Marker
      key={location._id}
      position={{
        lat: location.latitude,
        lng: location.longitude
      }}
    />)) : null
  }

  render() {
    const { google } = this.props
    const { userLocations } = this.state
    const style = {
      width: '100%',
      height: '85%'
    }
    return (
      <div>
        <div className="intro">
          <nav>
            <a className="selected">San Ysidrio</a>
            <a>Otay</a>
          </nav>
          <div>
            Cada pin es la ubicación de usuarios conectados hace menos
            de 2 horas y que se encuentran a menos de 1000 metros de distancia de la garita.
          </div>
        </div>
        <Map
          google={google}
          style={style}
          initialCenter={ports.port1}
          zoom={16}
          onReady={this.fetchPlaces}
        >
          {this.renderMarkers(userLocations)}
        </Map>
        <style jsx>{`
          .intro {
            margin-top: 5px;
          }

          nav {
            display: flex;
          }

          nav a{
            flex: 1;
            background-color: #FFF;
            padding: 12px;
            cursor: pointer;
            border-radius: 3px 3px 0 0;
            color: initial;
          }

          nav a.selected {
            background-color: #1b8ece;
            color: #FFF;
          }
          `}
        </style>
      </div>
    )
  }
}

export default MapContainer
