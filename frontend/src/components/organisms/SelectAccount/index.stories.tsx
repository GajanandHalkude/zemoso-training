import { type StoryObj, type Meta } from '@storybook/react'
import SelectAccountCard from '.'

const meta: Meta<typeof SelectAccountCard> = {
  title: 'organisms/SelectAccount',
  component: SelectAccountCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
}
export default meta

type Story = StoryObj<typeof SelectAccountCard>

export const example: Story = {}
