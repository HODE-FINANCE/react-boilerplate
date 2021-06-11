import React from 'react'
import ethers from 'ethers'
import { useIntl } from 'react-intl'
//
import useEther from 'hooks/useEther'
//
function HomePage() {
  const intl = useIntl()
  const { ether } = useEther()

  const handleCallContract = async (params) => {
    const contract = new ethers.Contract('CONTRACT_ADDR', 'ABI', ether.provider)
  }

  return <div>{intl.formatMessage({ id: 'home.welcome' })}</div>
}

export default HomePage
