import React, { Component } from 'react'
import 'isomorphic-unfetch'

import Layout from '../components/layout/layout'
import Report from '../components/report-tijuana'
import { getReport } from '../services/report'

class HomePage extends Component {
  state = {
    report: {}
  }

  async componentDidMount() {
    const report = await getReport('tijuana')
    this.setState({ report }) // eslint-disable-line
  }

  render() {
    const { report } = this.state
    const meta = {
      cities: {
        from: 'Tijuana',
        to: 'San Diego',
        header: 'Tijuana / San Diego',
        footer: 'San Ysidro y Otay | Tijuana'
      },
      title: 'GaritaCenter - Reporte de Garitas para San Ysidro y Otay | Tijuana',
      description: 'Reporte de Garitas en Tijuana / San Diego para la Garita de San Ysidro y Otay. Garitacenter, tiempo en línea fronteriza.'
    }

    return (
      <Layout meta={meta}>
        <Report report={report} />
      </Layout>
    )
  }
}

export default HomePage
