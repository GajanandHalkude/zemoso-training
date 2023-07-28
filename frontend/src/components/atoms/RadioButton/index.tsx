import React from 'react'
import { Radio, type RadioProps } from '@mui/material'

interface Props extends RadioProps {
  checked: boolean
  disabled?: boolean
  onClick: () => void
}

const RadioButton = ({ onClick, ...props }: Props): React.JSX.Element => {
  return <Radio {...props} data-testid="radio-button" onClick={onClick} />
}

export default RadioButton
