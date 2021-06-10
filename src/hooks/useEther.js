import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { ethers } from 'ethers'
//
const EtherContext = React.createContext(undefined)

EtherProvider.actions = {
  setEther: 'SET_ETHER',
}

const reducer = (state, action) => {
  switch (action.type) {
    case EtherProvider.actions.setEther:
      return {
        ...state,
        ...action.payload,
      }
    default:
      throw new Error(`No case for type ${action.type} found.`)
  }
}

export function EtherProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    ether: null,
  })

  const initEther = useCallback(async () => {
    const App = {}

    let isMetaMaskInstalled = true

    try {
      // Modern dapp browsers...
      if (walletProvider) {
        App.web3Provider = walletProvider
        App.provider = new ethers.providers.Web3Provider(walletProvider)
        try {
          // Request account access
          const accounts = await walletProvider.request({
            method: 'eth_requestAccounts',
          })
          App.YOUR_ADDRESS = accounts[0]
        } catch (error) {
          // User denied account access...
          // console.error('User denied account access')
        }
      }
      // If no injected web3 instance is detected, fall back to backup node
      else {
        App.provider = new ethers.providers.JsonRpcProvider(
          'https://bsc-dataseed1.binance.org',
          {
            name: 'Binance Smart Chain',
            chainId: 56,
          }
        )

        isMetaMaskInstalled = false
        // _print(
        //   "You don't have MetaMask installed! Falling back to backup node...\n (will likely to fail. Please install MetaMask extension).\n"
        // )
        sleep(10)
      }
      App.ethcallProvider = new ethcall.Provider()
      await App.ethcallProvider.init(App.provider)

      let addr = getUrlParameter('addr')

      //resolve ENS domain if possible
      if (typeof addr !== 'undefined') {
        if (addr.includes('.eth')) {
          addr = await App.provider.resolveName(addr)
          if (addr == null) {
            // _print('Could not initialize your ENS domain.\n')
          }
        }
        App.YOUR_ADDRESS = addr
      }

      // Could not load URL parameter
      if (!App.YOUR_ADDRESS) {
        if (!isMetaMaskInstalled) {
          if (localStorage.hasOwnProperty('addr')) {
            App.YOUR_ADDRESS = localStorage.getItem('addr')
          } else {
            // App.YOUR_ADDRESS = window.prompt('Enter your eth address.')
          }
        } else {
          let accounts = await App.provider.listAccounts()
          App.YOUR_ADDRESS = accounts[0]
        }
      }
    } catch (e) {}

    if (!App.YOUR_ADDRESS || !ethers.utils.isAddress(App.YOUR_ADDRESS)) {
      // throw 'Could not initialize your address. Make sure your address is checksum valid.'
    }

    localStorage.setItem('addr', App.YOUR_ADDRESS)

    dispatch({
      type: EtherProvider.actions.setEther,
      payload: {
        ether: App,
      },
    })
  }, [])

  useEffect(() => {
    initEther()
  }, [initEther])

  return <EtherContext.Provider value={state}>{children}</EtherContext.Provider>
}

EtherProvider.propTypes = {
  children: PropTypes.node,
}

export default function useEther() {
  const context = React.useContext(EtherContext)
  if (context === undefined) {
    throw new Error('ether context must be used within an ether provider')
  }

  return [context]
}
