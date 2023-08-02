import React from 'react'
import Dropdown from '.'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { category } from './constant'

describe('testing dropdown', () => {
  const placeholder = 'select your country'
  const mockOnChange = jest.fn()

  test('testing whether Dropdown component rendering correctly or not', () => {
    render(
      <Dropdown
        values={category}
        placeholder={placeholder}
        onChangeHandler={mockOnChange}
      />
    )

    screen.getByTestId('dropdown')
  })

  test('rendering the provided list length', () => {
    render(
      <Dropdown
        values={category}
        placeholder={placeholder}
        onChangeHandler={mockOnChange}
      />
    )

    const length = category.length
    expect(length).toBe(2)
  })

  test('testing default value of iconComponent', () => {
    render(
      <Dropdown
        values={category}
        placeholder={placeholder}
        onChangeHandler={mockOnChange}
      />
    )

    const iconComponent = screen.getByTestId('KeyboardArrowDownSharpIcon')
    expect(iconComponent).toBeInTheDocument()
  })
})
