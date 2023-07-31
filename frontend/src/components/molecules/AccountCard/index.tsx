import { Card, CardContent, Stack, styled } from '@mui/material'
import React from 'react'
import theme from '../../../themes'
import TypographyComponent from '../../atoms/Typography'

interface AccountCardPropType {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

const StyledCard = styled(Card)(() => ({
  borderRadius: '8px',
  cursor: 'pointer'
}))

const AccountCard = ({
  icon,
  title,
  description,
  onClick,
  ...props
}: AccountCardPropType): React.JSX.Element => {
  return (
    <StyledCard onClick={onClick} {...props} variant="outlined">
      <CardContent>
        <Stack direction="row" gap={3}>
          <Stack>{icon}</Stack>
          <Stack alignItems="start" gap={1}>
            <TypographyComponent
              variant="body2"
              color={theme.palette.text.highEmphasis}
              text={title}
            />
            <TypographyComponent
              variant="caption"
              color={theme.palette.text.lowEmphasis}
              text={description}
            />
          </Stack>
        </Stack>
      </CardContent>
    </StyledCard>
  )
}
export default AccountCard
