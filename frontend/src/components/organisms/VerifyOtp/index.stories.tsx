import { type Meta, type StoryObj } from '@storybook/react'
import VerifyOtp from '.'

const meta: Meta<typeof VerifyOtp> = {
  title: 'organisms/VerifyOtp',
  component: VerifyOtp,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof VerifyOtp>

export const Example: Story = {
  args: {
    mobileNumber: '1234567890'
  }
}
