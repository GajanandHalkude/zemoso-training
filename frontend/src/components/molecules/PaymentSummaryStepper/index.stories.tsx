import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PaymentSummaryStepper from "./index";
export default {
  title: "Molecules/PaymentSummaryStepper",
  component: PaymentSummaryStepper,
} as ComponentMeta<typeof PaymentSummaryStepper>;

const Template: ComponentStory<typeof PaymentSummaryStepper> = (args) => (
  <div>
    <PaymentSummaryStepper {...args} />
  </div>
);

export const TransactionStepperStory = Template.bind({})
TransactionStepperStory.args = {
  symbol:'BTC',
  name:'Bitcoin'
};

