import { type Meta, type Story } from '@storybook/react'
import ChipComponent from '.'
import React from 'react'
import theme from '../../../themes'
const meta: Meta<typeof ChipComponent> = {
  title: 'atoms/ChipComponent',
  component: ChipComponent
}

const Template: Story<typeof ChipComponent> = (args: any) => (
  <ChipComponent {...args} />
)
export const primary = Template.bind({})
primary.args = {
  label: 'New',
  variant: 'filled',
  sx: {
    backgroundColor: `${theme.palette.structuralColors.buttonHover}`,
    color: `${theme.palette.primary.main}`
  }
}
export default meta
