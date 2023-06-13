import React from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
interface IButtonProps extends MuiButtonProps {
  backgroundColor?: string | React.CSSProperties
}
const ButtonComponent: React.FC<IButtonProps> = ({
  variant,
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <MuiButton
    data-testid="button"
      variant={variant}
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: backgroundColor,
        '&:hover': {
          backgroundColor: backgroundColor,
        },
      }}
    >
      {children}
    </MuiButton>
  )
}

export default ButtonComponent
