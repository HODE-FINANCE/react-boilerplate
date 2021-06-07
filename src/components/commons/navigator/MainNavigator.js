import React, {
  // useContext,
  Fragment,
} from 'react'
// import { useRouter } from 'next/router'
import Head from 'next/head'
//
// import { AppContext } from 'context'
// import { colors } from 'templates'
import useDarkMode from 'hooks/useDarkMode'
//
function MainNavigator() {
  const [theme] = useDarkMode()

  // const router = useRouter()
  // const { wallet, connectWallet } = useContext(AppContext)

  return (
    <Fragment>
      <Head>
        <style>
          {`
           
            body{
              ${
                theme === 'light'
                  ? 'background-color: #F0F2F5 !important;'
                  : `
                
                background: #070504 !important;
                `
              } 
              
            }
            body *::selection { background: #000000; }
           
            `}
        </style>
      </Head>
      <div>Main navigation</div>
    </Fragment>
  )
}

export default MainNavigator
