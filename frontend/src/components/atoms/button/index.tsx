import React from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
interface IButtonProps extends MuiButtonProps {
  backgroundColor?: string | React.CSSProperties,
  text?:React.ReactNode;
}
const ButtonComponent: React.FC<IButtonProps> = ({
  variant,
  text,
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
      {text}
    </MuiButton>
  )
}

export default ButtonComponent
