import { ComponentStory, ComponentMeta } from '@storybook/react'
import theme from "../../../theme";
import ChipItem from './index'
import React from 'react';

export default {
  title: 'Atoms/Chip',
  component: ChipItem,
} as ComponentMeta<typeof ChipItem>

const Template: ComponentStory<typeof ChipItem> = (args) => (
  <ChipItem {...args} />
)

export const ChipItemRoundedLight = Template.bind({})

ChipItemRoundedLight.args = {
  label: '24 h',
  chipVariant: 'light',
  chipType: 'rounded'
}

export const ChipItemRoundedDark = Template.bind({})

ChipItemRoundedDark.args = {
  label: 'Purchased',
  chipVariant: 'dark',
  chipType: 'rounded'
}

export const ChipItemSquaredSelected = Template.bind({})

ChipItemSquaredSelected.args = {
  chipType: 'squared',
  chipColor: theme.palette.chipColors.main,
  label: 'Bitcoin',
  selected: true
}

export const ChipItemSquaredUnselected = Template.bind({})

ChipItemSquaredUnselected.args = {
  chipType: 'squared',
  chipColor: theme.palette.chipColors.main,
  label: 'Bitcoin',
  selected: false
}