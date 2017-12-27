import React, { Component } from 'react'
import 'isomorphic-unfetch'

import Layout from '../components/layout/layout'
import OficialReport from '../components/oficial-report'
import { getReport } from '../services/report'

class HomePage extends Component {

  static async getInitialProps() {
    const report = await getReport('tijuana')
    return { report }
  }

  render() {
    return (
      <Layout url={this.props.url.pathname}>
        <OficialReport report={this.props.report} />
      </Layout>
    )
  }
}

export default HomePage
