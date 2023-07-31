import type { Meta, StoryObj } from '@storybook/react'
import HorizontalStepper from '.'
import { steps } from './constants'

const meta: Meta<typeof HorizontalStepper> = {
  title: 'atoms/HorizontalStepper',
  component: HorizontalStepper,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof HorizontalStepper>

export const Check: Story = {
  args: {
    steps,
    activeStep: 1
  }
}
