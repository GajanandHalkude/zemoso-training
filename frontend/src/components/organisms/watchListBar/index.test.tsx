import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import WatchListBar from '.'
import BitCoinIcon from '../../../../public/assets/images/coins/bitcoin.svg'

describe('Currency Detail Card tests', () => {
  const fn = jest.fn()
  test('Whether the card for up trend are rendering', () => {
    render(
      <WatchListBar
        coinIcon={BitCoinIcon}
        coinName="Bitcoin"
        coinSymbol="BTC"
        percentageChange={2.09}
        isAddedtoWishList={false}
        marketCap={5862471259.356}
        volumeIn24H={751428635.9}
        circulatingSupply={7142539.89}
        handleClickForWatchListButton={fn}
      />
    )
    const currenctDetailCard = screen.getByTestId('currenctDetailCard')
    expect(currenctDetailCard).toBeInTheDocument
  })
  test('Whether the card for down trend rendering', () => {
    render(
      <WatchListBar
        coinIcon={BitCoinIcon}
        coinName="Bitcoin"
        coinSymbol="BTC"
        percentageChange={-2.09}
        isAddedtoWishList={true}
        marketCap={5862471259.356}
        volumeIn24H={751428635.9}
        circulatingSupply={7142539.89}
        handleClickForWatchListButton={fn}
      />
    )
    const currenctDetailCard = screen.getByTestId('currenctDetailCard')
    expect(currenctDetailCard).toBeInTheDocument
  })
})
