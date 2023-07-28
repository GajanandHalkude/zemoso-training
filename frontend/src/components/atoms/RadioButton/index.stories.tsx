import type { Meta, StoryObj } from '@storybook/react'
import RadioButton from '.'

const meta: Meta<typeof RadioButton> = {
  title: 'atoms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

export default meta

type Story = StoryObj<typeof RadioButton>

export const Check: Story = {
  args: {
    checked: true
  }
}

export const UnCheck: Story = {
  args: {
    checked: false
  }
}

export const Disable: Story = {
  args: {
    disabled: true
  }
}
