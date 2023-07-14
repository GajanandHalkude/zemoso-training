import React from 'react'
import { render, screen } from '@testing-library/react'
import PaymentSummaryStepper from "./index";
import '@testing-library/jest-dom'

it('should renders the crypto card', async () => {
  render(<PaymentSummaryStepper symbol={'BTC'} name={'Bitcoin'} />);
  const wrapper = screen.getByTestId('summary-stepper')
  expect(wrapper).toBeInTheDocument()
})
it('should render the stepper component with correct data', () => {
  const symbol = 'BTC';
  const name = 'Bitcoin';
  const type = 'sell';

  const { getByText } = render(
    <PaymentSummaryStepper symbol={symbol} name={name} type={type} />
  );
  expect(getByText('Delivery fees')).toBeInTheDocument(); 
  expect(getByText('Deposit to')).toBeInTheDocument(); 
  expect(getByText(`0.01 ${symbol}`)).toBeInTheDocument();
  expect(getByText('Rupee Coin')).toBeInTheDocument();
  expect(getByText(`${name} wallet`)).toBeInTheDocument();
});
