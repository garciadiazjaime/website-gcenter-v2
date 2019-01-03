import React from 'react'

import BasePage from '../components/base-page'
import Report from '../components/report-7-days'

import { getReport7Days } from '../services/report'

function HomePage() {
  return (
    <BasePage city="tijuana" template={Report} getReportHelper={getReport7Days} />
  );
}

export default HomePage
