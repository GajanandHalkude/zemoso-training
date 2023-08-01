import { Box, Stack } from '@mui/material'
import React from 'react'
import Icons from '../../atoms/Icons'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../themes'
export interface NavItemProps {
  itemText: string
  iconSrc: string
}
const NavItem: React.FC<NavItemProps> = ({
  itemText,
  iconSrc,
  ...props
}: NavItemProps) => {
  return (
    <Box {...props}>
      <Stack direction={'row'} gap={'12px'}>
        <Icons src={iconSrc} alt={'Home'} />
        <TypographyComponent text={itemText} variant={'caption'} color={theme.palette.primary.dark}/>
      </Stack>
    </Box>
  )
}
export default NavItem
