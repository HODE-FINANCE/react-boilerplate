import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
//
import { AppProvider } from 'context'
import { Web3Provider } from 'hooks/useWeb3'
import { MainNavigator } from 'components/commons/navigator'
import { useLocale } from 'config/intl'
//
function MyApp({ Component, pageProps }) {
  const { locale, messages } = useLocale()
  return (
    <AppProvider>
      <Web3Provider>
        <IntlProvider locale={locale} messages={messages} onError={() => null}>
          <MainNavigator {...pageProps} />
          <Component {...pageProps} />
          <div>footer</div>
        </IntlProvider>
      </Web3Provider>
    </AppProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object,
}
//
export default MyApp
//
