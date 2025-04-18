import NavItem from '.'
import type { Meta, StoryObj } from '@storybook/react'
import home from '../../../../public/Icons/Home.svg'
import theme from '../../../themes'
const meta: Meta<typeof NavItem> = {
  title: 'Molecules/NavItem',
  component: NavItem,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof NavItem>

export const Home: Story = {
  args: {
    itemText: 'Home',
    iconSrc: home,
    variant: 'caption',
    sx: { color: theme.palette.primary.dark }
  }
}
