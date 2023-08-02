import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import VerifyOtp from '.'

describe('VerifyOtp', () => {
  test('renders without crashing', () => {
    render(<VerifyOtp mobileNumber="1234567890" onClick={jest.fn()} />)
  })
  test('Check initially button is disable or not', () => {
    const { getByTestId } = render(
      <VerifyOtp mobileNumber="1234567890" onClick={jest.fn()} />
    )
    const button = getByTestId('verify-otp-submit-button')
    expect(button).toBeDisabled()
  })
  test('After written 6 digit otp button will be enable', () => {
    const { getByTestId } = render(
      <VerifyOtp mobileNumber="1234567890" onClick={jest.fn()} />
    )
    const button = getByTestId('verify-otp-submit-button')
    const input = getByTestId('otp-input').querySelector('input')
    fireEvent.change(input as HTMLInputElement, { target: { value: '123456' } })
    expect(button).toBeEnabled()
  })
  test('If otp is more than 6 digit button will be disable', () => {
    const { getByTestId } = render(
      <VerifyOtp mobileNumber="1234567890" onClick={jest.fn()} />
    )
    const button = getByTestId('verify-otp-submit-button')
    const input = getByTestId('otp-input').querySelector('input')
    fireEvent.change(input as HTMLInputElement, {
      target: { value: '1234562' }
    })
    expect(button).toBeDisabled()
  })
  test('If otp is more than 6 error message is coming', () => {
    const { getByTestId, getByText } = render(
      <VerifyOtp mobileNumber="1234567890" onClick={jest.fn()} />
    )
    const button = getByTestId('verify-otp-submit-button')
    const input = getByTestId('otp-input').querySelector('input')
    fireEvent.change(input as HTMLInputElement, {
      target: { value: '1234562' }
    })
    getByText('OTP should be atmost 6 digits')
    expect(button).toBeDisabled()
  })
  test('Test the on Click', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <VerifyOtp mobileNumber="1234567890" onClick={onClick} />
    )
    const input = getByTestId('otp-input').querySelector('input')
    fireEvent.change(input as HTMLInputElement, {
      target: { value: '123452' }
    })
    const button = getByTestId('verify-otp-submit-button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})
