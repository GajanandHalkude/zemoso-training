import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AmountDetailsCardComponent from '.'

it('should renders the amount details card for buying', async () => {
  render(
    <AmountDetailsCardComponent
      price={3406069.54}
      balance={340000}
      transactionType="buy"
      coin="Bitcoin BTC"
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      handleChange={(number)=>{}}
    />
  )
  const wrapper = screen.getByTestId('amount details card')
  expect(wrapper).toBeInTheDocument()
  const upperBox = screen.getByTestId('upperField')
  fireEvent.change(upperBox, { target: { value: '10000' } })
  fireEvent.change(upperBox, { target: { value: '' } })
  const lowerBox = screen.getByTestId('lowerField')
  fireEvent.change(lowerBox, { target: { value: '0.25698' } })
  fireEvent.change(lowerBox, { target: { value: '' } })
  const button = screen.getByTestId('button');
  fireEvent.click(button);
})

it('should renders the amount details card for sellling', async () => {
  render(
    <AmountDetailsCardComponent
      price={3406069.54}
      balance={0.02569851425}
      transactionType="sell"
      coin="Bitcoin BTC"
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      handleChange={(number)=>{}}
    />
  )
  const wrapper = screen.getByTestId('amount details card')
  expect(wrapper).toBeInTheDocument()
  const lowerBox = screen.getByTestId('lowerField')
  fireEvent.change(lowerBox, { target: { value: '10000' } })
  fireEvent.change(lowerBox, { target: { value: '0' } })
  fireEvent.change(lowerBox, { target: { value: '' } })
  const upperBox = screen.getByTestId('upperField')
  fireEvent.change(upperBox, { target: { value: '0.25698' } })
  fireEvent.change(upperBox, { target: { value: '0' } })
  fireEvent.change(upperBox, { target: { value: '' } })
  const button = screen.getByTestId('button');
  fireEvent.click(button);
})