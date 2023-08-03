import React from 'react'
import { ThemeProvider } from '@mui/material'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import theme from '../../../themes'
import SelectCountries from '.'
import { countries } from '../../atoms/Dropdown/constant'

describe('SelectCountries', () => {
  test('should render correctly and button is disable', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SelectCountries onClick={jest.fn()} />
      </ThemeProvider>
    )
    const submitButton = getByTestId('select-countries-submit-button')
    expect(submitButton).toBeDisabled()
  })
  test('select item dropdown check button is active or not', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SelectCountries onClick={jest.fn()} />
      </ThemeProvider>
    )
    const submitButton = getByTestId('select-countries-submit-button')
    const dropdown = getByTestId('select-countries-dropdown').querySelector(
      'input'
    )
    fireEvent.change(dropdown as HTMLElement, {
      target: { value: countries[0].value }
    })
    expect(submitButton).toBeEnabled()
  })
  test('check on click properly working or not', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SelectCountries onClick={onClick} />
      </ThemeProvider>
    )
    const submitButton = getByTestId('select-countries-submit-button')
    const dropdown = getByTestId('select-countries-dropdown').querySelector(
      'input'
    )
    fireEvent.change(dropdown as HTMLElement, {
      target: { value: countries[0].value }
    })
    expect(submitButton).toBeEnabled()
    fireEvent.click(submitButton)
    expect(onClick).toBeCalledWith(countries[0].value)
  })
})
