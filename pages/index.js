import React from 'react'
import 'isomorphic-unfetch'

import Layout from '../components/layout/layout'
import OficialReport from '../components/oficial-report'
import { getReport } from '../services/report'

const HomePage = ({ url, report }) => (
  <Layout url={url.pathname}>
    <OficialReport report={report} />
  </Layout>
)

HomePage.getInitialProps = async () => {
  const report = await getReport('tijuana')
  return { report }
}

export default HomePage
