import { useEffect, useState } from 'react'

const useWallet = () => {
  const [wallet, setWallet] = useState(null)
  const [componentMounted, setComponentMounted] = useState(false)

  useEffect(() => {
    const localWallet = window.localStorage.getItem('wallet')
    setWallet(localWallet)
    setComponentMounted(true)
  }, [])

  return [wallet, componentMounted]
}

export default useWallet
