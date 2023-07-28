import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps
} from '@mui/material'

import React from 'react'

interface ButtonProps extends MuiButtonProps {
  label: string
  onClick: () => void
  variant?: 'contained' | 'text' | 'outlined'
  disabled?: boolean
}

const Button = ({ label, ...props }: ButtonProps): React.JSX.Element => {
  return <MuiButton {...props}>{label}</MuiButton>
}

export default Button
