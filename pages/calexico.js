import React, { Component } from 'react'
import 'isomorphic-unfetch'

import Layout from '../components/layout/layout'
import Report from '../components/report-calexico'
import { getReport } from '../services/report'

class HomePage extends Component {
  state = {
    report: []
  }

  async componentDidMount() {
    const report = await getReport('calexico')
    this.setState({ report }) // eslint-disable-line
  }

  render() {
    const { report } = this.state
    const meta = {
      city: 'Mexicali / Calexico',
      title: 'GaritaCenter - Reporte de Garitas para Calexico | Mexicali',
      description: 'Reporte de Garitas de Mexicali para la Garita de Calexico. Garitacenter, tiempo en línea fronteriza.'
    }

    return (
      <Layout meta={meta}>
        <Report report={report} />
      </Layout>
    )
  }
}

export default HomePage
