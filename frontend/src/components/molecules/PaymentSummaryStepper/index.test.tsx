import React from 'react'
import { render, screen } from '@testing-library/react'
import PaymentSummaryStepper from "./index";
import '@testing-library/jest-dom'

it('should renders the crypto card', async () => {
  render(<PaymentSummaryStepper />);
  const wrapper = screen.getByTestId('summary-stepper')
  expect(wrapper).toBeInTheDocument()
})
