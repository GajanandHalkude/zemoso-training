import { Card, type CardProps, Divider, Stack } from '@mui/material'
import React from 'react'
import theme from '../../../themes'
import TypographyComponent from '../../atoms/Typography'
import profile from '../../../../public/Assets/profile2.svg'
import setting from '../../../../public/Assets/setting.svg'
import question from '../../../../public/Assets/question.svg'
import logout from '../../../../public/Assets/logout.svg'
import NavItem from '../NavItem'
import { styled } from '@mui/system'
import { type VariantType } from '../../../utils/constants/types/TypographyVariant'

const CommonNavItem = styled(NavItem)`
  &:hover {
    background-color: ${theme.palette.Greys.stroke};
  }
  flex-grow: 1;
  padding: 10px;
`

export interface ProfileModalProps extends CardProps {
  name?: string
  id?: string
  isOpen: boolean
  onClick?: () => void
}

export interface NavItemData {
  id: string
  iconSrc: string
  itemText: string
  variant: VariantType
  onClick?: () => void
}

const ProfileModal = ({
  name = 'Ross Gener',
  id = 'P4533493FF',
  isOpen = true,
  onClick,
  ...props
}: ProfileModalProps): React.JSX.Element => {
  if (!isOpen) {
    return <></>
  }

  const navItemsData: NavItemData[] = [
    { id: '1', iconSrc: profile, itemText: 'Your Details', variant: 'body2' },
    { id: '2', iconSrc: setting, itemText: 'Setting', variant: 'body2' },
    { id: '3', iconSrc: question, itemText: 'Help Center', variant: 'body2' },
    { id: '4', iconSrc: logout, itemText: 'Logout', variant: 'body2', onClick }
  ]

  return (
    <Card {...props}>
      <Stack direction="column" height="100%" width="100%">
        <Stack padding="10px">
          <TypographyComponent text={name} variant="body2" />
          <TypographyComponent
            text={id}
            variant="caption"
            sx={{ color: theme.palette.text.lowEmphasis, mb: '5px' }}
          />
        </Stack>
        <Divider />
        {navItemsData.map((navItemData, index) => (
          <CommonNavItem
            key={navItemData.id}
            iconSrc={navItemData.iconSrc}
            itemText={navItemData.itemText}
            variant={navItemData.variant}
            onClick={navItemData.onClick}
          />
        ))}
      </Stack>
    </Card>
  )
}

export default ProfileModal
