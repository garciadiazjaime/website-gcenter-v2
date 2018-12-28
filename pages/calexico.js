import React from 'react'

import BasePage from '../components/base-page'
import Report from '../components/report-calexico'

function CalexicoPage() {
  return (
    <BasePage city="calexico" template={Report} />
  );
}

export default CalexicoPage
