import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddTradingAddressModal from '.'
import { ThemeProvider } from '@emotion/react'
import theme from '../../../themes'
import {
  ADD_NEW_ADDRESS_MODAL_BUTTON_TITLE,
  ADD_NEW_ADDRESS_MODAL_HEADING
} from '../../../utils/constants/string'

describe('AddTradingAddressModal', () => {
  test('should be renderProperly', () => {
    render(
      <ThemeProvider theme={theme}>
        <AddTradingAddressModal
          handleClose={jest.fn()}
          tradingAddressName="address name"
          addTradingAddress={jest.fn()}
          open={false}
        />
      </ThemeProvider>
    )
  })
  test('Check model showing properly or not', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AddTradingAddressModal
          handleClose={jest.fn()}
          tradingAddressName="address name"
          addTradingAddress={jest.fn()}
          open={true}
        />
      </ThemeProvider>
    )
    expect(getByText(ADD_NEW_ADDRESS_MODAL_BUTTON_TITLE)).toBeInTheDocument()
    expect(getByText(ADD_NEW_ADDRESS_MODAL_HEADING)).toBeInTheDocument()
    const Button = getByTestId('add-trading-address-modal-button')
    expect(Button).toBeDisabled()
  })
  test('Check Model Funcionality Working or not', () => {
    const handleClose = jest.fn()
    const addTradingAddress = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AddTradingAddressModal
          handleClose={handleClose}
          tradingAddressName="address name"
          addTradingAddress={addTradingAddress}
          open={true}
        />
      </ThemeProvider>
    )
    const Button = getByTestId('add-trading-address-modal-button')
    const TextField = getByTestId(
      'add-trading-address-modal-textfield'
    ).querySelector('textarea')
    expect(Button).toBeDisabled()
    fireEvent.change(TextField as HTMLElement, { target: { value: 'test' } })
    expect(Button).toBeEnabled()
    fireEvent.click(Button)
    expect(handleClose).toBeCalled()
    expect(addTradingAddress).toHaveBeenCalledWith('test')
  })
})
