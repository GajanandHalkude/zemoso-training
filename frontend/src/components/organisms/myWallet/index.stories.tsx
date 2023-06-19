import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PaymentAndDetailsCard from '.'
import bitcoin from '../../../../public/assets/images/coins/bitcoin.svg'
import rupee from '../../../../public/assets/icons/rupee.svg'

export default {
  title: 'organisms/PaymentAndDetails',
  component: PaymentAndDetailsCard,
} as ComponentMeta<typeof PaymentAndDetailsCard>

const Template: ComponentStory<typeof PaymentAndDetailsCard> = (args) => (
  <PaymentAndDetailsCard {...args} />
)

export const PaymentCard = Template.bind({})
PaymentCard.args = {
  variant: 'payment',
  title: 'Payment details',
  icon: rupee,
  coinType: 'USD Coin (cash)',
  balance: 34000,
  wallet:true
}

export const BalanceCard = Template.bind({})
BalanceCard.args = {
  variant: 'balance',
  title: 'Total balance',
  icon: bitcoin,
  coinType: 'Bitcoin',
  coinSymbol: 'BTC',
  balance: 0.023451,
  wallet:true
}

export const DepositCard = Template.bind({})
DepositCard.args = {
  variant: 'deposit',
  title: 'Deposit to',
  icon: rupee,
  coinType: 'USD Coin (cash)',
  wallet:true
}

export const MyWallet = Template.bind({})
MyWallet.args = {
  variant: 'wallet',
  title: 'My Wallets',
  icon: rupee,
  coinType: 'USD Coin',
  balance: 34000,
  wallet:false,
  walletName: 'US Dollar'
}