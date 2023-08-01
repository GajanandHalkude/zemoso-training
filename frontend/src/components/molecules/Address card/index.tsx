import { Box, Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../themes'
import RadioButton from '../../atoms/RadioButton'

interface AddressCardProps {
  addressHeader: string
  addressBody: string
  isChecked: boolean
  onClick: (isClicked: boolean) => void
}

const AddressCard = ({
  addressHeader,
  addressBody,
  onClick,
  isChecked,
  ...props
}: AddressCardProps): React.JSX.Element => {
  const onClickHandler = (): void => {
    onClick(!isChecked)
  }
  return (
    <Box
      {...props}
      sx={{
        '&:hover': {
          backgroundColor: theme.palette.Greys.stroke
        },
        paddingY: 1
      }}
    >
      <Stack alignItems="center" direction="row" gap="28px">
        <Stack direction="column">
          <RadioButton onClick={onClickHandler} checked={isChecked} />
        </Stack>

        <Stack direction="column" gap="12px">
          <TypographyComponent
            text={addressHeader}
            variant="body2"
            sx={{ color: theme.palette.text.lowEmphasis }}
          />
          <TypographyComponent
            text={addressBody}
            variant="body2"
            sx={{ color: theme.palette.text.highEmphasis, width: '416px' }}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default AddressCard
