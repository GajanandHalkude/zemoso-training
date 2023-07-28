import React from 'react'
import { getByTestId, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import RadioButton from '.'

describe('Test RadioButton component', () => {
  it('should render correctly', () => {
    const onClick = jest.fn()
    render(<RadioButton checked={true} onClick={onClick} />)
    getByTestId(document.documentElement, 'radio-button')
  })
  it('check it is check or not', () => {
    const onClick = jest.fn()
    render(<RadioButton checked={true} onClick={onClick} />)
    const elememt = getByTestId(document.documentElement, 'radio-button')
    expect(elememt).toHaveClass('Mui-checked')
  })
  it('check it is check disble or not', () => {
    render(<RadioButton disabled={true} checked={true} onClick={jest.fn()} />)
    const elememt = getByTestId(document.documentElement, 'radio-button')
    expect(elememt).toHaveClass('Mui-disabled')
  })
  it('check onclick working or not', async () => {
    const onClick = jest.fn()
    render(<RadioButton checked={true} onClick={onClick} />)
    const elememt = getByTestId(document.documentElement, 'radio-button')
    fireEvent.click(elememt)
    expect(onClick).toHaveBeenCalled()
  })
})
