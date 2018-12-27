import React, { Component } from 'react'
import 'isomorphic-unfetch'

import Layout from '../components/layout/layout'
import Report from '../components/report-el-paso'
import { getReport } from '../services/report'

class HomePage extends Component {
  state = {
    report: {}
  }

  async componentDidMount() {
    const report = await getReport('elpaso')
    this.setState({ report }) // eslint-disable-line
  }

  render() {
    const { report } = this.state
    const meta = {
      city: 'Ciudad Juarez / El Paso',
      title: 'GaritaCenter - Reporte de Garitas para Ciudad Juarez - El Paso',
      description: 'Reporte de Garitas en Ciudad Juarez / El Paso para la Garita de Bridge Americas, Paso Norte, Stanton y Ysleta. Garitacenter, tiempo en línea fronteriza.'
    }

    return (
      <Layout meta={meta}>
        <Report report={report} />
      </Layout>
    )
  }
}

export default HomePage
