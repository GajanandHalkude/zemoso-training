import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PaymentSummaryStepper from "./index";
export default {
  title: "Molecules/PaymentSummaryStepper",
  component: PaymentSummaryStepper,
} as ComponentMeta<typeof PaymentSummaryStepper>;

const Template: ComponentStory<typeof PaymentSummaryStepper> = () => (
  <div>
    <PaymentSummaryStepper />
  </div>
);

export const TransactionStepperStory = Template.bind({})

