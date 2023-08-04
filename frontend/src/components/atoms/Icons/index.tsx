import { Box } from '@mui/material'
import React from 'react'

interface IconProps {
  src: string
  alt: string
  width?: string
  height?: string
  clickHandler?: () => void
}
const Icons = ({
  src,
  alt,
  width,
  height,
  clickHandler,
  ...props
}: IconProps): React.JSX.Element => {
  return (
    <Box onClick={clickHandler} sx={{ cursor: 'pointer' }} {...props}>
      <img src={src} alt={alt} width={width} height={height} />
    </Box>
  )
}

export default Icons
