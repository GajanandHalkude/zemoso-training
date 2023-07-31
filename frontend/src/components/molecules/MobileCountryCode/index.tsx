import React from 'react'
import TextField from '../../atoms/TextField'
import { Stack, formLabelClasses, inputLabelClasses } from '@mui/material'
import DownArrow from '../../../../public/assests/icons/DownArrow.svg'
import Divider from '../../../../public/assests/icons/Divider.svg'
import Icons from '../../atoms/Icons'
import styled from '@emotion/styled'
import theme from '../../../themes'

interface MobileCountryCodeProps {
  value: string
  onChange: (value: string) => void
  countryIcon: React.JSX.Element
  errorMessages?: string
}

const StyledTextField = styled(TextField)({
  [`.${inputLabelClasses.root}`]: {
    color: theme.palette.text.lowEmphasis
  },
  [`.${formLabelClasses.root}.${formLabelClasses.focused}`]: {
    color: theme.palette.text.lowEmphasis
  }
})

const MobileCountryCode = ({
  onChange,
  countryIcon,
  value,
  errorMessages,
  ...props
}: MobileCountryCodeProps): React.JSX.Element => {
  const onChnageHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target?.value)
  }
  return (
    <StyledTextField
      {...props}
      type="text"
      label="Mobile number"
      value={value}
      error={errorMessages !== undefined}
      helperText={errorMessages}
      startIcon={
        <Stack direction="row" gap={1}>
          <>{countryIcon}</>
          <Icons src={DownArrow} alt="downArrow" />
          <Icons src={Divider} alt="divider" />
        </Stack>
      }
      onChange={onChnageHandler}
    />
  )
}

export default MobileCountryCode
