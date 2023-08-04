import { type StoryObj, type Meta } from '@storybook/react'
import CreateYourPassword from '.'

const meta: Meta<typeof CreateYourPassword> = {
  title: 'organisms/CreateYourPassword',
  component: CreateYourPassword,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submit' }
  }
}
export default meta

type Story = StoryObj<typeof CreateYourPassword>

export const example: Story = {}
