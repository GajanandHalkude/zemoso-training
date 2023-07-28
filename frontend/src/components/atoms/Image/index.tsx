import { Box, type SxProps } from '@mui/material'
import React from 'react'
export interface CustomImageProps {
  src: string
  onClick?: () => void
  sx?: SxProps
  height?: string
  width?: string
  alt?: string
  hidden?: boolean
  id?: any
}
const ImageComponent: React.FC<CustomImageProps> = ({
  src,
  onClick,
  height,
  sx,
  width,
  alt,
  hidden,
  ...props
}: CustomImageProps) => {
  return (
    <Box onClick={onClick} sx={sx} height={height} width={width} {...props}>
      <img src={src} alt={alt} hidden={hidden} />
    </Box>
  )
}
export default ImageComponent
