import { render } from '@testing-library/react'
import App from './App'
import React from 'react'
describe('Testing App Atoms', () => {
  it('Checking App  is rendering properly or not', async () => {
    render(<App />)
  })
})
