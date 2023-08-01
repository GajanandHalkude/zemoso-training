import { fireEvent, render } from '@testing-library/react'
import AddressCard from '.'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
describe('testing address card molecule', () => {
  test('renders address card component', () => {
    const addressHeader = 'Address1'
    const addressBody = 'testing molecule'
    const isChecked = true
    const onClick = jest.fn()
    const { getByText } = render(
      <AddressCard
        addressHeader={addressHeader}
        addressBody={addressBody}
        isChecked={isChecked}
        onClick={onClick}
      />
    )

    const header = getByText(addressHeader)
    const body = getByText(addressBody)

    expect(header).toBeInTheDocument()
    expect(body).toBeInTheDocument()
  })

  test('should handles onClick event correctly', () => {
    const addressHeader = 'Address1'
    const addressBody = 'testing molecule'
    const isChecked = true
    const onClick = jest.fn()
    const { getByTestId } = render(
      <AddressCard
        addressHeader={addressHeader}
        addressBody={addressBody}
        isChecked={isChecked}
        onClick={onClick}
      />
    )
    fireEvent.click(getByTestId('radio-button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
