import { Box, Stack } from '@mui/material'
import React from 'react'
import RadioButton from '../../atoms/RadioButton'
import TypographyComponent from '../../atoms/Typography'
import TextField from '../../atoms/TextField'
import card from '../../../../public/Assets/cardSymbol.svg'
import Icons from '../../atoms/Icons'
import theme from '../../../themes'
interface CvvProps {
  cardHeading: string
  lastFourDigits: number
  expiryDate: string
  onClick: () => void
  checked: boolean
  onChange: () => void
}
const Cvv: React.FC<CvvProps> = ({ onClick, checked, cardHeading, lastFourDigits, expiryDate, onChange, ...props }: CvvProps) => {
  return (
    <Box {...props}>
      <Stack direction={'row'} gap={'40px'}>
        <Stack>
          <RadioButton checked={checked} onClick={onClick} />
        </Stack>

        <Stack rowGap={'4px'} >
          <TypographyComponent text={cardHeading} variant={'caption'} color={theme.palette.text.highEmphasis}/>
          <Stack direction={'row'} gap={'4px'}>
            <TypographyComponent text={'Last four digits'} variant={'body2'} color={theme.palette.text.mediumEmphasis}/>
            <TypographyComponent text={`${lastFourDigits}`} variant={'body2'} color={theme.palette.text.highEmphasis}/>
            <TypographyComponent text={'Expiry Date'} variant={'body2'} color={theme.palette.text.mediumEmphasis}/>
            <TypographyComponent text={`${expiryDate}`} variant={'body2'} color={theme.palette.text.highEmphasis}/>
          </Stack>
          <TextField label={'CVV/CVC'} onChange={onChange} endIcon={<Icons alt='card' src={card}/>} ></TextField>
        </Stack>
      </Stack>
    </Box>
  )
}
export default Cvv
