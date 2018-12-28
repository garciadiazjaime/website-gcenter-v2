import React, { Component } from 'react'
import 'isomorphic-unfetch'

import Layout from './layout/layout'
import { getReport } from '../services/report'

import meta from '../config/meta'

class BasePage extends Component {
  state = {
    report: {}
  }

  async componentDidMount() {
    const { city } = this.props;
    const report = await getReport(city)
    this.setState({ report }) // eslint-disable-line
  }

  render() {
    const { report } = this.state
    const { city, template } = this.props;

    return (
      <Layout meta={meta[city]}>
        {template({ report })}
      </Layout>
    )
  }
}

export default BasePage
