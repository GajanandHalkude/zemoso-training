import { Box } from '@mui/material'
import React from 'react'

interface IconProps {
  src: string
  alt: string
  width?: string
  height?: string
  clickHandler?: () => void
}
const Icons = (props: IconProps): React.JSX.Element => {
  return (
    <Box onClick={props.clickHandler} sx={{ cursor: 'pointer' }}>
      <img
        src={`${props.src}`}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Box>
  )
}

export default Icons
