/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type AvatarProps, Avatar as AvatarComponent } from '@mui/material'
import React from 'react'

interface Props extends AvatarProps {
  src?: string
  alt: string
  width?: string
  height?: string
}

const Avatar = ({ height, width, variant, alt, ...props }: Props) => {
  return (
    <AvatarComponent
      alt={alt}
      data-testid="avatar"
      variant={variant}
      {...props}
      sx={{ height, width }}
    />
  )
}
Avatar.defaultProps = {
  height: '34px',
  width: '34px'
}
export default Avatar
