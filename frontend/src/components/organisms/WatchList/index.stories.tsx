import React from 'react';
import { Story, Meta } from '@storybook/react';
import WatchlistCard, { WatchlistCardProps } from './';
import Bitcoin from '../../../../public/assets/images/bitcoin.svg'

export default {
  title: 'organisms/WatchlistCard',
  component: WatchlistCard,
} as Meta;

const Template: Story<WatchlistCardProps> = (args) => <WatchlistCard {...args} />;

export const profit = Template.bind({});
profit.args = {
  image:Bitcoin,
  name: 'BitCoins',
  price: '74.41',
  change: 2.5,
  profit:true
};

export const Loss = Template.bind({});
Loss.args = {
  image:Bitcoin,
  name: 'BitCoins',
  price: '74.41',
  change: 2.5,
};
export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  ...profit.args,
  handleClick: () => {
    console.log('Card clicked!');
  },
};