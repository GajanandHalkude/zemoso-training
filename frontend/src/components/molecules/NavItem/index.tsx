import { Box, Stack } from '@mui/material'
import React from 'react'
import Icons from '../../atoms/Icons'
import TypographyComponent from '../../atoms/Typography'
export interface NavItemProps {
  itemText: string
  iconSrc: string
  sx?: React.CSSProperties
  variant: 'body1' | 'body2' | 'body3' | 'h1' | 'link' | 'caption'
  onClick?: () => void
}
const NavItem: React.FC<NavItemProps> = ({
  itemText,
  iconSrc,
  sx,
  variant,
  onClick,
  ...props
}: NavItemProps) => {
  return (
    <Box onClick={onClick} {...props}>
      <Stack direction={'row'} gap={'12px'}>
        <Icons src={iconSrc} alt={'Home'}/>
        <TypographyComponent text={itemText} variant={variant} sx={sx}/>
      </Stack>
    </Box>
  )
}
export default NavItem
