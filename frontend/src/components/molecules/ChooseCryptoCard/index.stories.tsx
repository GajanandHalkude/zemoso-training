import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ChooseCryptoCard from "./index"
import bitcoin from "../../../../public/assets/images/coins/bitcoin.svg";


export default {
  title: 'molecules/ChooseCryptoCard',
  component: ChooseCryptoCard,
} as ComponentMeta<typeof ChooseCryptoCard>

const Template: ComponentStory<typeof ChooseCryptoCard> = (args) => (
  <div style={{ width: '159px', height: '156px' }}>
    <ChooseCryptoCard {...args} />
  </div>
)

export const Bitcoin = Template.bind({})

Bitcoin.args = {
  image: bitcoin,
  name: 'Bitcoin',
  value: 3406069.54,
  selected: false,
}
