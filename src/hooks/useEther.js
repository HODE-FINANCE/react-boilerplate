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
    provider: null,
    signer: null,
  })

  const initEther = useCallback(async () => {
    const ethereum = window.ethereum
    const _provider = new ethers.providers.Web3Provider(ethereum)
    const _signer = _provider.getSigner()

    dispatch({
      type: EtherProvider.actions.setEther,
      payload: {
        provider: _provider,
        signer: _signer,
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
