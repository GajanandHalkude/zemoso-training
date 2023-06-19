import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import WatchListBar from '.'
import BitCoinIcon from '../../../../public/assets/images/coins/bitcoin.svg'

export default {
  title: 'Organisms/WatchListBar',
  component: WatchListBar,
} as ComponentMeta<typeof WatchListBar>

const Template: ComponentStory<typeof WatchListBar> = (args) => (
  <div style={{ width: '1239px', height: '106px' }}>
    <WatchListBar {...args} />
  </div>
)

export const CurrencyCardForUpTrend = Template.bind({})
CurrencyCardForUpTrend.args = {
    coinIcon: BitCoinIcon,
    coinName: 'Bitcoin',
    coinSymbol: 'BTC',
    percentageChange: +2.09,
    isAddedtoWishList: false,
    marketCap: 5862471259.356,
    volumeIn24H: 751428635.90,
    circulatingSupply : 7142539.89
}

export const CurrencyCardForDownTrend = Template.bind({})
CurrencyCardForDownTrend.args = {
    coinIcon: BitCoinIcon,
    coinName: 'Bitcoin',
    coinSymbol: 'BTC',
    percentageChange: -2.09,
    isAddedtoWishList: true,
    marketCap: 5862471259.356,
    volumeIn24H: 751428635.90,
    circulatingSupply : 7142539.89
}