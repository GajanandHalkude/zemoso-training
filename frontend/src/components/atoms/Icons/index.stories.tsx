import type { Meta, StoryObj } from '@storybook/react'
import Icons from '.'
import logo from '../../../../public/assests/icons/close.svg'
import arrow from '../../../../public/assests/icons/arrow.svg'

const meta: Meta<typeof Icons> = {
  title: 'ATOMS/Icons',
  component: Icons,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Icons>

export const Close: Story = {
  args: {
    src: logo,
    alt: 'close'
  }
}

export const Back: Story = {
  args: {
    src: arrow,
    alt: 'back'
  }
}
