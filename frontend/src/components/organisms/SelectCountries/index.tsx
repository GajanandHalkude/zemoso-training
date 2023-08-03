import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import Icons from '../../atoms/Icons'
import BackIcon from '../../../../public/assests/icons/arrow.svg'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../themes'
import {
  SELECT_COUNTRY_HEADING,
  SELECT_COUNTRY_INPUT_PLACEHOLDER
} from '../../../utils/constants/string'
import Dropdown from '../../atoms/Dropdown'
import { countries } from '../../atoms/Dropdown/constant'
import Button from '../../atoms/Button'

interface SelectCountriesProp {
  onClick: (value: string) => void
  height?: string
}

const SelectCountries = ({
  onClick,
  height = '80vh'
}: SelectCountriesProp): React.JSX.Element => {
  const [selectedValue, setSelectedValue] = React.useState('')
  const isMdScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const handleOnChange = (value: string): void => {
    setSelectedValue(value)
  }
  const handleOnClick = (): void => {
    onClick(selectedValue)
  }

  return (
    <Stack height={height} width="100%" padding={2}>
      <Stack justifyContent="space-between" height="100%">
        <Stack gap={4}>
          <Stack>
            <Icons src={BackIcon} alt="Back Icon" />
          </Stack>
          <Stack gap={4} alignItems="center" justifyContent="space-between">
            <Stack alignItems="flex-start" gap={4}>
              <TypographyComponent text={SELECT_COUNTRY_HEADING} variant="h1" />
              <Dropdown
                data-testid="select-countries-dropdown"
                values={countries}
                selectedValue={selectedValue}
                onChangeHandler={handleOnChange}
                placeholder={SELECT_COUNTRY_INPUT_PLACEHOLDER}
                width={isMdScreen ? '512px' : '80vw'}
                sx={{ padding: '2px' }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems="flex-end">
          <Button
            data-testid="select-countries-submit-button"
            label="Submit"
            onClick={handleOnClick}
            disabled={selectedValue === ''}
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
    </Stack>
  )
}

export default SelectCountries
