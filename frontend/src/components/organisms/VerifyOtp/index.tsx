import { Stack, TextField } from '@mui/material'
import React from 'react'
import Icons from '../../atoms/Icons'
import BackIcon from '../../../../public/assests/icons/arrow.svg'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../themes'
import Button from '../../atoms/Button'

interface VerifyOtpProps {
  mobileNumber: string
  onClick: () => void
}

const VerifyOtp = ({
  mobileNumber,
  onClick
}: VerifyOtpProps): React.JSX.Element => {
  const [otpValue, setOtpValue] = React.useState<string>('')
  const onChangeOtp = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOtpValue(e.target.value)
  }
  return (
    <Stack
      height="60vh"
      width="800px"
      justifyContent="space-between"
      padding={2}
    >
      <Stack gap={2}>
        <Stack>
          <Icons src={BackIcon} alt="Back Icon" />
        </Stack>
        <Stack sx={{ minWidth: '500px' }} gap={4} alignItems="center">
          <Stack gap={2} sx={{ minWidth: '500px' }}>
            <TypographyComponent text="Enter the 6-digit code" variant="h1" />
            <TypographyComponent
              text={`We sent it to ${mobileNumber}`}
              variant="body3"
              color={theme.palette.text.mediumEmphasis}
            />
          </Stack>
          <Stack sx={{ minWidth: '500px' }} gap={2}>
            <TextField
              data-testid="otp-input"
              type="number"
              value={otpValue}
              placeholder="Enter code here"
              label="6-digit code"
              onChange={onChangeOtp}
              error={otpValue.length !== 6}
              helperText={
                otpValue.length !== 6 && 'OTP should be atmost 6 digits'
              }
            />
            <TypographyComponent
              sx={{ width: '100%' }}
              text="I didn’t recieve a code"
              variant="link"
              color={theme.palette.primary.dark}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack justifySelf="flex-end" alignItems="flex-end">
        <Button
          data-testid="verify-otp-submit-button"
          label="Submit"
          onClick={onClick}
          disabled={otpValue.length !== 6}
          variant="contained"
          size="medium"
          sx={{
            background: theme.palette.primary.dark,
            color: theme.palette.structuralColors.white,
            '&.Mui-disabled': {
              background: theme.palette.primary.light,
              color: theme.palette.structuralColors.white
            }
          }}
        />
      </Stack>
    </Stack>
  )
}

export default VerifyOtp
