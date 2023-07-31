import { Chip, type SxProps, type ChipProps } from '@mui/material'
import React from 'react'
export interface CustomChipProps extends ChipProps {
  label: string
  onClick?: () => void
  variant: 'outlined' | 'filled'
  disabled?: boolean
  sx: SxProps
}
const ChipComponent: React.FC<CustomChipProps> = ({ label, sx, onClick, variant, disabled }: CustomChipProps) => {
  return (
   <Chip sx={sx} label={label} disabled={disabled} variant={variant}/>
  )
}
export default ChipComponent
