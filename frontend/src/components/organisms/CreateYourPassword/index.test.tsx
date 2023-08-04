import React from 'react'
import CreateYourPassword from '.'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('testing create your password component', () => {
  test('testing default values', () => {
    const { getByText } = render(<CreateYourPassword onSubmit={jest.fn()} />)
    const headerElement = getByText('Create your password')
    expect(headerElement).toBeInTheDocument()
  })
  test('button should be disabled initially', () => {
    const onClick = jest.fn()
    const { getByText } = render(<CreateYourPassword onSubmit={onClick} />)
    const buttonElement = getByText('Continue')
    expect(buttonElement).toBeDisabled()
  })

  test('button should be enabled only if password length > 6', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<CreateYourPassword onSubmit={onClick} />)
    const input = getByTestId('text-input').querySelector('input')
    fireEvent.change(input as HTMLInputElement, {
      target: { value: 'shivam123' }
    })
    const buttonElement = getByTestId('create-password')
    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalled()
  })
  test('should toggle the visibility of the password when the Show Password icon is clicked', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<CreateYourPassword onSubmit={onClick} />)
    const icon = getByTestId('eye')
    act(() => {
      icon.click()
    })
    const input = getByTestId('text-input').querySelector('input')
    expect(input).toBeVisible()
  })
})
