import React from 'react'

import BasePage from '../components/base-page'
import Report from '../components/report-laredo'

function HomePage() {
  return (
    <BasePage city="laredo" template={Report} />
  );
}

export default HomePage
