import { type Meta, type StoryObj } from '@storybook/react'
import React from 'react'
import AccountCard from '.'
import Icons from '../../atoms/Icons'
import Account from '../../../../public/Icons/user.svg'
import Business from '../../../../public/Icons/business.svg'

const meta: Meta<typeof AccountCard> = {
  title: 'molecules/AccountCard',
  component: AccountCard,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof AccountCard>

export const PersonalAccountCard: Story = {
  args: {
    icon: (
      <Icons src={Account} alt="Personal Account" height="34px" width="34px" />
    ),
    title: 'Personal account',
    description: 'Send, spend, and receive around the world for less.'
  }
}

export const BusinessAccountCard: Story = {
  args: {
    icon: (
      <Icons src={Business} alt="Business account" height="34px" width="34px" />
    ),
    title: 'Personal account',
    description: 'Do business or freelance work internationally.'
  }
}
