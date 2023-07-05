import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import BuyCurrency from "./index";
import { currencies } from '../../../constants'

export default {
  title: "Organisms/ChooseCurrency",
  component: BuyCurrency,
} as ComponentMeta<typeof BuyCurrency>;

const Template: ComponentStory<typeof BuyCurrency> = (args) => (
  <div style={{ width: "708px", height: "414px" }}>
    <BuyCurrency {...args} />
  </div>
);

export const Primary = Template.bind({})
Primary.args = {
  currenciesData: currencies,
  coin:'bitcoin'
}
