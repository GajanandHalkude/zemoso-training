import React from 'react'
import { render, screen } from '@testing-library/react'
import ChooseCrypto from '.'
import '@testing-library/jest-dom'
import Tick from "../../../../public/assets/icons/selected.svg";

it('should renders the crypto card', async () => {
  const fn = jest.fn()
  render(
    <ChooseCrypto
      image={Tick}
      name="Bitcoin"
      selected={false}
      value={1500000}
    />
  )
  const wrapper = screen.getByTestId('Bitcoin')
  expect(wrapper).toBeInTheDocument()
})
it('should renders the selected crypto card', async () => {
  const fn = jest.fn()
  render(
    <ChooseCrypto
      image={Tick}
      name="Etherium"
      selected={true}
      value={1800000}
    />
  )
  const wrapper = screen.getByTestId('Etherium')
  expect(wrapper).toBeInTheDocument()
})
