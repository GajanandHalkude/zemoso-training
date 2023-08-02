import { type Meta, type StoryObj } from '@storybook/react'
import ProfileModal from '.'

const meta: Meta<typeof ProfileModal> = {
  title: 'Molecules/ProfileModal',
  component: ProfileModal,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof ProfileModal>

export const Defalut: Story = {
  args: {
    name: 'Ross Gener',
    id: 'P44561754',
    isOpen: true,
    sx: {
      width: '230px',
      height: '309px'
    }
  }
}
