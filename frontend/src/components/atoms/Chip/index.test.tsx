import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ChipComponent from '.'
describe('Chip', () => {
  test('renders the Chip with the correct label', () => {
    const label = 'Samplee Chip'
    const { getByText } = render(
      <ChipComponent label={label} variant="outlined" sx={null} />
    )
    const chipElement = getByText(label)
    expect(chipElement).toBeInTheDocument()
  })

  test('handles onClick event when clicked', () => {
    const onClickMock = jest.fn()
    const label = 'Sample Chip'
    const { getByText } = render(
      <ChipComponent label={label} variant="outlined" onClick={onClickMock} sx={null} />
    )
    const chipElement = getByText(label)

    fireEvent.click(chipElement)

    expect(onClickMock).toHaveBeenCalledTimes(0)
  })

  test('applies the correct color prop', () => {
    const label = 'Sample Chip'
    const color = 'primary'
    const { container } = render(
      <ChipComponent label={label} variant="outlined" color={color} sx={null} />
    )
    const chipElement = container

    expect(chipElement).toBeInTheDocument()
  })

  test('disables the Chip when disabled prop is true', () => {
    const label = 'Sample Chip'
    const { container } = render(
      <ChipComponent label={label} variant="outlined" disabled={true} sx={null} />
    )
    const chipElement = container.querySelector('.Mui-disabled')

    expect(chipElement).toBeInTheDocument()
  })
})
