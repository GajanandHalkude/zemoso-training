import { ComponentStory, ComponentMeta } from '@storybook/react'
import SummaryCard from "./index";
import React from 'react'

export default {
  title: "Organisms/SummaryCard",
  component: SummaryCard,
} as ComponentMeta<typeof SummaryCard>;

const Template: ComponentStory<typeof SummaryCard> = (args) => (
  <SummaryCard {...args} />
);

export const SellSummaryCard = Template.bind({})

SellSummaryCard.args = {
  type: "sell",
  btcValue: 0.023451,
};

export const BuySummaryCard = Template.bind({});

BuySummaryCard.args = {
  type: "buy",
  btcValue: 0.023451,
};