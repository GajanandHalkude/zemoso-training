import { type StoryObj, type Meta } from '@storybook/react'
import VerticalStepper from '.'
import { steps } from './constants'

const meta: Meta<typeof VerticalStepper> = {
  title: 'atoms/VerticalStepper',
  component: VerticalStepper,
  tags: ['atodocs']
}
export default meta

type Story = StoryObj<typeof VerticalStepper>

export const Default: Story = {
  args: {
    steps,
    activeStep: 2
  }
}
