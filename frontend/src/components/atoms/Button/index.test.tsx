import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '.'
import React from 'react'

describe('Button Component', () => {
  test('renders with the provided label', () => {
    const label = 'Click Me'
    const onClick = jest.fn()
    const { getByText } = render(
      <Button label={label} onClick={onClick} disabled={false} />
    )

    const buttonElement = getByText(label)
    expect(buttonElement).toBeInTheDocument()
  })

  test('calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn()
    const label = 'Click Me'
    const { getByText } = render(
      <Button label={label} onClick={onClickMock} disabled={false} />
    )

    fireEvent.click(getByText(label))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})

test('testing disabled', () => {
  const label = 'click me'
  const onClickMock = jest.fn()
  const { getByText } = render(
    <Button label={label} onClick={onClickMock} disabled={true} />
  )

  const buttonElement = getByText(label)
  expect(buttonElement).toBeDisabled()

  fireEvent.click(buttonElement)
  expect(onClickMock).not.toHaveBeenCalled()
})
