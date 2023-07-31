import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CheckboxComponent from '.'

describe('CheckboxComponent', () => {
  test('checking the component renders without errors', () => {
    render(<CheckboxComponent data-testId="checkbox" onClick={() => { }} checked={false} />)
  })

  describe('Checked status', () => {
    test('shows checked when checked prop is true', () => {
      const { getByTestId } = render(<CheckboxComponent data-testId="checkbox" onClick={() => { }} checked={true} />)
      const checkbox = getByTestId('checkbox')
      expect(checkbox).toHaveClass('Mui-checked')
    })
  })

  describe('onClick event', () => {
    test('calls onClick function when clicked', () => {
      const onClickMock = jest.fn()
      const { getByTestId } = render(<CheckboxComponent data-testId="checkbox" onClick={onClickMock} checked={false} />)
      const checkbox = getByTestId('checkbox')
      fireEvent.click(checkbox)
      expect(onClickMock).toHaveBeenCalledTimes(1)
    })
  })
})
