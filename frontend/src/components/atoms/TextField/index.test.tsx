import React from 'react'
import { getByTestId, render, act, fireEvent } from '@testing-library/react'
import TextField from '.'
import '@testing-library/jest-dom'
import { LockClockOutlined } from '@mui/icons-material'

describe('InputField', () => {
  it('renders without icon', () => {
    render(
      <TextField label="label" onChange={jest.fn()} data-testid="input-field" />
    )
    getByTestId(document.documentElement, 'input-field')
  })
  it('render with one icon', () => {
    render(
      <TextField
        label="label"
        onChange={jest.fn()}
        data-testid="input-field"
        startIcon={<LockClockOutlined data-testid="icon" />}
      />
    )
    getByTestId(document.documentElement, 'input-field')
    getByTestId(document.documentElement, 'icon')
  })
  it('render with two icons', () => {
    render(
      <TextField
        label="label"
        onChange={jest.fn()}
        data-testid="input-field"
        startIcon={<LockClockOutlined data-testid="icon1" />}
        endIcon={<LockClockOutlined data-testid="icon2" />}
      />
    )
    getByTestId(document.documentElement, 'input-field')
    getByTestId(document.documentElement, 'icon1')
    getByTestId(document.documentElement, 'icon2')
  })
  it('render with two icons', async () => {
    const { getAllByText } = render(
      <TextField label="label" onChange={jest.fn()} data-testid="input-field" />
    )
    getByTestId(document.documentElement, 'input-field')
    getAllByText('label')
  })
  it('Onchanhe working or not', async () => {
    const onChange = jest.fn()
    const { getByTestId } = render(
      <TextField label="label" onChange={onChange} data-testid="input-field" />
    )
    const element = getByTestId('input-field').querySelector('input')
    act(() => {
      fireEvent.change(element as HTMLInputElement, {
        target: { value: 'test' }
      })
    })
    expect(onChange).toHaveBeenCalled()
  })
})
