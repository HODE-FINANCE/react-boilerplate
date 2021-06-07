import { ethers } from 'ethers'
//
export default new ethers.providers.JsonRpcProvider(
  'https://bsc-dataseed1.binance.org',
  {
    name: 'Binance Smart Chain',
    chainId: 56,
  }
)
