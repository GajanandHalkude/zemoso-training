import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { currencies } from '../../../constants'
import BuyCurrency from "./index";

describe('Choose crypto tests', () => {
  test('Whether the cards are rendering', () => {
    render(<BuyCurrency currenciesData={currencies} />);
    const chooseCrypto = screen.getByTestId('chooseCurrency')
    expect(chooseCrypto).toBeInTheDocument
  })
})
