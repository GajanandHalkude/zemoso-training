import type { Meta, StoryObj } from '@storybook/react'
import Cvv from '.'
const meta: Meta<typeof Cvv> = {
  title: 'Molecules/Cvv',
  component: Cvv,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Cvv>
export const checked: Story = {
  args: {
    cardHeading: 'EUR Visa Debit',
    lastFourDigits: 9318,
    expiryDate: '09/25',
    checked: true
  }
}
export const unChecked: Story = {
  args: {
    cardHeading: 'EUR Visa Debit',
    lastFourDigits: 2715,
    expiryDate: '03/27',
    checked: false
  }
}
