import { AppProvider } from 'context'
import { Web3Provider } from 'hooks/useWeb3'
import { MainNavigator } from 'components/commons/navigator'
//
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Web3Provider>
        <MainNavigator {...pageProps} />
        <Component {...pageProps} />
        <div>footer</div>
      </Web3Provider>
    </AppProvider>
  )
}
//
export default MyApp
//
