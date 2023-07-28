/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable multiline-ternary */
import { InputAdornment, TextField as MuiTextFeild } from '@mui/material'
import React from 'react'

interface TextFieldPropType extends React.ComponentProps<typeof MuiTextFeild> {
  startIcon?: React.JSX.Element
  endIcon?: React.JSX.Element
  placeholder?: string
  defaultValue?: string
  label: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const TextField = ({
  startIcon = undefined,
  endIcon = undefined,
  ...props
}: TextFieldPropType): React.JSX.Element => {
  return (
    <MuiTextFeild
      {...props}
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : null,
        endAdornment: endIcon ? (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ) : null
      }}
    />
  )
}

export default TextField
