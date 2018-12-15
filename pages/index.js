import React, { Component } from 'react'
import 'isomorphic-unfetch'

import Layout from '../components/layout/layout'
import OficialReport from '../components/oficial-report'
import { getReport } from '../services/report'
import { saveGeoLocation } from '../services/geoLocation'

class HomePage extends Component {
  state = {
    report: []
  }

  async componentDidMount() {
    const report = await getReport('tijuana')
    this.setState({ report }) // eslint-disable-line
    // saveGeoLocation()
  }

  render() {
    const { url } = this.props
    const { report } = this.state
    return (
      <Layout url={url.pathname}>
        <OficialReport report={report} />
      </Layout>
    )
  }
}

export default HomePage
