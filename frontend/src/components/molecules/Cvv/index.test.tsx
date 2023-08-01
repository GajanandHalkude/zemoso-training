import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Cvv from '.'

describe('Cvv Component', () => {
  const mockOnClick = jest.fn()
  const mockOnChange = jest.fn()
  const defaultProps = {
    onClick: mockOnClick,
    checked: false,
    cardHeading: 'Card Heading',
    lastFourDigits: 1234,
    expiryDate: '12/23',
    onChange: mockOnChange
  }

  test('renders without errors', () => {
    render(<Cvv {...defaultProps} />)
  })

  test('displays the correct CardHeading, LastFourDigits, and ExpiryDate', () => {
    const { getByText } = render(<Cvv {...defaultProps} />)
    getByText(defaultProps.cardHeading)
  })

  test('calls onClick function when RadioButton is clicked', () => {
    const { getByTestId } = render(<Cvv {...defaultProps} />)
    const radioButton = getByTestId('radio-button')
    fireEvent.click(radioButton)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  test('TextField onChange event is triggered', () => {
    const { getByLabelText } = render(<Cvv {...defaultProps} />)
    const cvvTextField = getByLabelText('CVV/CVC')
    fireEvent.change(cvvTextField, { target: { value: '123' } })
    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })
})
