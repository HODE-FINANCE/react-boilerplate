import { useState, useMemo } from 'react'
//
import truncate from 'lodash/truncate'
//
import PageSettingTemplate from 'templates/page/setting'
//
function CoinCard({
  coinIcon,
  coinName,
  coinAddress,
  website,
  useFollow,
  following,
  //
  onFollow,
  onUnfollow,
}) {
  const handleFollow = () => {
    onFollow(coinAddress, {
      symbol: coinName,
    })
  }

  const handleUnfollow = () => {
    onUnfollow(coinAddress)
  }

  const { CointSourceWrapper, CoinWrapper, TokenSourceWrapper } =
    PageSettingTemplate

  const coinUrl = website.replace(/(^\w+:|^)\/\//, '')
  return (
    <CoinWrapper>
      <CointSourceWrapper>
        <TokenSourceWrapper>
          <img src={coinIcon} width={50} height={50} />
        </TokenSourceWrapper>
      </CointSourceWrapper>
      <b>{coinName}</b>
      <a href={website} target="_blank">
        {truncate(coinUrl, {
          length: 15,
        })}
      </a>
      {useFollow && following && (
        <div className="follow-button" onClick={handleFollow}>
          Follow
        </div>
      )}
      {useFollow && !following && (
        <div className="unfollow-button" onClick={handleUnfollow}>
          Unfollow
        </div>
      )}
    </CoinWrapper>
  )
}

export default CoinCard
