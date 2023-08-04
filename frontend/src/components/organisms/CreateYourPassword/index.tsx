import { Stack, useMediaQuery } from '@mui/material'
import theme from '../../../themes'
import Icons from '../../atoms/Icons'
import Button from '../../atoms/Button'
import TypographyComponent from '../../atoms/Typography'
import React, { useState } from 'react'
import BackIcon from '../../../../public/assests/icons/arrow.svg'
import TextField from '../../atoms/TextField'
import openEye from '../../../../public/Assets/openEye.svg'
import closedEye from '../../../../public/Assets/closedEye.svg'

interface CreateYourPasswordProps {
  onSubmit: (arg: string) => void
  height?: string
}

const CreateYourPassword = ({
  onSubmit,
  height = '60vh'
}: CreateYourPasswordProps): React.JSX.Element => {
  const isMdScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const [showPassword, setShowPassword] = useState(false)
  const [Password, setPassword] = useState<string>('')

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show)
  }
  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value)
  }

  const handleSubmit = (): void => {
    onSubmit(Password)
  }

  const commonStyles = { minWidth: isMdScreen ? '500px' : '100%' }
  return (
    <Stack height={height} justifyContent="space-between" padding={2}>
      <Stack gap={2}>
        <Stack>
          <Icons src={BackIcon} alt="Back Icon" />
        </Stack>
        <Stack gap={4} alignItems="center">
          <Stack gap={2} sx={{ ...commonStyles }}>
            <TypographyComponent text="Create your password" variant="h1" />
          </Stack>
          <Stack alignItems="flex-start" gap={2} sx={{ ...commonStyles }}>
            <TextField
              endIcon={
                <Icons
                  src={showPassword ? openEye : closedEye}
                  alt={'Eye'}
                  clickHandler={handleClickShowPassword}
                  data-testid="eye"
                />
              }
              label={'Password'}
              type={showPassword ? 'text' : 'password'}
              value={Password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              sx={{ ...commonStyles }}
              data-testid="text-input"
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack justifySelf="flex-end" alignItems="flex-end">
        <Button
          data-testid="create-password"
          label="Continue"
          onClick={handleSubmit}
          disabled={Password.length < 6}
          variant="contained"
          size="medium"
          sx={{
            background: theme.palette.primary.dark,
            color: theme.palette.structuralColors.white
          }}
        />
      </Stack>
    </Stack>
  )
}

export default CreateYourPassword
