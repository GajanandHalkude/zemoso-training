import { type Meta, type StoryObj } from '@storybook/react'
import AddTradingAddressModal from '.'

const meta: Meta<typeof AddTradingAddressModal> = {
  title: 'molecules/AddTradingAddressModal',
  component: AddTradingAddressModal,
  tags: ['autodocs'],
  argTypes: {
    addTradingAddress: {
      action: 'clicked'
    }
  }
}
export default meta

type Story = StoryObj<typeof AddTradingAddressModal>

export const Example: Story = {
  args: {
    tradingAddressName: 'Address Name',
    addTradingAddress: (value) => {
      console.log(value)
    },
    handleClose: () => {}
  }
}
