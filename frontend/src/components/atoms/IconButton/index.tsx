import { Box } from '@mui/material'
import React from 'react'
import theme from '../../../themes'
import styled from '@emotion/styled'
interface IconButtonProps {
  width?: string
  height?: string
  padding?: string
  src: string
  sx?: React.CSSProperties
  onClick: () => void
}
const StyledBox = styled(Box)({
  borderRadius: '4px',
  border: `1px solid ${theme.palette.Greys.stroke}`,
  backgroundColor: `${theme.palette.structuralColors.white}`
})
const IconButtonComponent: React.FC<IconButtonProps> = ({
  src,
  width,
  height,
  padding,
  onClick
}: IconButtonProps) => {
  return (
    <StyledBox onClick={onClick} width={width} height={height}>
      <img
        data-testid="IconButtonComponent"
        src={src}
        style={{ padding }}
        alt="icon"
      />
    </StyledBox>
  )
}

export default IconButtonComponent
