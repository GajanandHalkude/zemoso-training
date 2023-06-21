import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import RecentTransactionsComponent from '.'

export default {
  title: 'organisms/RecentTransactions',
  component: RecentTransactionsComponent,
} as ComponentMeta<typeof RecentTransactionsComponent>

const Template: ComponentStory<typeof RecentTransactionsComponent> = (args) => (
  <RecentTransactionsComponent {...args} />
)

export const RecentTransactions = Template.bind({})
RecentTransactions.args = {
  recentTransactions: [
    {
      id: 1,
      cryptoId: 'bitcoin',
      transactionDateTime: '2022-06-14',
      quantity: '1',
      symbol: 'BTC',
      transactionType: 'sell',
      price: 18707.31,
      status: 'success',
      remarks: 'Transaction success',
    },
    {
      id: 2,
      cryptoId: 'bitcoin',
      transactionDateTime: '2022-06-14',
      quantity: '0.5',
      symbol: 'BTC',
      transactionType: 'buy',
      price: 13000,
      status: 'fail',
      remarks: 'Transaction success',
    },
  ],
}
export const EmptyTransactions = Template.bind({})
EmptyTransactions.args = {
  recentTransactions: [],
}
