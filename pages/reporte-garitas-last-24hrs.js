import React from 'react'

import BasePage from '../components/base-page'
import Report from '../components/report-last-24hrs'

import { getReportLast24hrs } from '../services/report'

function HomePage() {
  return (
    <div>
      <BasePage city="tijuana" template={Report} getReportHelper={getReportLast24hrs} />
    </div>
  );
}

export default HomePage
