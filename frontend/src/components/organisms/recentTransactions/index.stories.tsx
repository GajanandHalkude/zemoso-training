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
      currencyId: 'bitcoin',
      date: new Date('2022-06-14'),
      quantity: '1',
      symbol: 'BTC',
      type: 'sell',
      price: 18707.31,
      status: 'success',
    },
    {
      id: 2,
      currencyId: 'bitcoin',
      date: new Date('2022-06-14'),
      quantity: '0.5',
      symbol: 'BTC',
      type: 'buy',
      price: 13000,
      status: 'fail'
    },
  ],
}
export const EmptyTransactions = Template.bind({})
EmptyTransactions.args = {
  recentTransactions: [],
}
