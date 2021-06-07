import React from 'react'
import { useIntl } from 'react-intl'
//
function HomePage() {
  const intl = useIntl()
  return <div>{intl.formatMessage({ id: 'home.welcome' })}</div>
}

export default HomePage
