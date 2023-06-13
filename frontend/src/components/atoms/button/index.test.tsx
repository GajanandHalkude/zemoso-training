import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Button from '.'
import '@testing-library/jest-dom'

it('should renders the button', async () => {
    const fn = jest.fn()
    render(
      <Button onClick={fn} backgroundColor="primary">
        Buy
      </Button>
    )
    const ReactElement = await screen.getByText('Buy')
    fireEvent.click(ReactElement)
    expect(ReactElement).toBeInTheDocument()
  })