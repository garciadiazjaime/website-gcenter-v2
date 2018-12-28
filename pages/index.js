import React from 'react'

import BasePage from '../components/base-page'
import Report from '../components/report-tijuana'

function HomePage() {
  return (
    <BasePage city="tijuana" template={Report} />
  );
}

export default HomePage
