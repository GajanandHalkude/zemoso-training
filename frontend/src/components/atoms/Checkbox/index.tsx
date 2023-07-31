import { Checkbox, type CheckboxProps } from '@mui/material'
import React from 'react'

interface Props extends CheckboxProps {
  onClick: () => void
  checked: boolean
}
const CheckboxComponent: React.FC<Props> = ({ onClick, checked, ...props }: Props) => {
  return (
            <Checkbox checked={checked} onClick={onClick} {...props}/>
  )
}
export default CheckboxComponent
