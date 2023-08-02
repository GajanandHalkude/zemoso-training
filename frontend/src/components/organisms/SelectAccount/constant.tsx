import React from 'react'
import Icons from '../../atoms/Icons'
import Account from '../../../../public/Icons/user.svg'
import Business from '../../../../public/Icons/business.svg'

interface AccountCardInterface {
  title: string
  description: string
  icon: React.JSX.Element
  data: string
}

export const AccountCards: AccountCardInterface[] = [
  {
    title: 'Personal account',
    description: 'Send, spend, and receive around the world for less.',
    icon: <Icons src={Account} alt="Personal Account" />,
    data: 'personal-account'
  },
  {
    title: 'Business account',
    description: 'Do business or freelance work internationally',
    icon: <Icons src={Business} alt="Business account" />,
    data: 'business-account'
  }
]
