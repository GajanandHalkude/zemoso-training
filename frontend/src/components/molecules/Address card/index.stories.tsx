import type { Meta, StoryObj } from '@storybook/react'
import AddressCard from '.'

const meta: Meta<typeof AddressCard> = {
  title: 'MOLECULES/AddressCard',
  component: AddressCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
}

export default meta

type Story = StoryObj<typeof AddressCard>

export const address1: Story = {
  args: {
    addressHeader: 'Address 1',
    addressBody:
      '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    isChecked: true
  }
}

export const address2: Story = {
  args: {
    addressHeader: 'Address 2',
    addressBody:
      '3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003',
    isChecked: false
  }
}
