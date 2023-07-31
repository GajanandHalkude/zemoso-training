import React from 'react'
import { Typography, type TypographyProps } from '@mui/material'

export interface CustomTypographyProps extends TypographyProps {
  text: string
  variant: 'body1' | 'body2' | 'body3' | 'h1' | 'link' | 'caption'
}

const TypographyComponent = ({ variant, sx, text, ...props }: CustomTypographyProps): React.JSX.Element => (
  <Typography data-testid="typography-component" variant={variant} sx={sx} {...props}>
    {text}
  </Typography>
)

export default TypographyComponent
