import React, { Fragment, useContext } from 'react'
//
import { AppContext } from 'context'
//
function WalletPage() {
  const { wallet, connectWallet } = useContext(AppContext)

  return (
    <Fragment>
      <h1>Wallet</h1>
      {wallet && <div>{wallet}</div>}
      {!wallet && <button onClick={connectWallet}>Connect</button>}
    </Fragment>
  )
}

export default WalletPage
