import React from 'react'
import HorizontalStepper from '.'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { steps } from './constants'
import { ThemeProvider } from '@mui/material'
import theme from '../../../themes'

describe('HorizontalStepper', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <HorizontalStepper
          steps={steps}
          activeStep={1}
          data-testid="horizontal-stepper"
        />
      </ThemeProvider>
    )
    expect(getByTestId('horizontal-stepper')).toBeInTheDocument()
  })
  it('checks lines poperly render or not', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <HorizontalStepper
          steps={steps}
          activeStep={2}
          data-testid="horizontal-stepper"
        />
      </ThemeProvider>
    )
    const elements = getAllByTestId('horizontal-stepper-connector')
    expect(elements).toHaveLength(steps.length - 1)
  })
  it('checks levels poperly render or not', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <HorizontalStepper
          steps={steps}
          activeStep={2}
          data-testid="horizontal-stepper"
        />
      </ThemeProvider>
    )
    const elements = getAllByTestId('horizontal-stepper-lavel')
    expect(elements).toHaveLength(steps.length)
  })
})
