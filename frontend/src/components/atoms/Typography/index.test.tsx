import { render } from '@testing-library/react'
import React from 'react'
import TypographyComponent from '.'
import '@testing-library/jest-dom'

describe('Typography Atom', () => {
  test('render Typography', () => {
    const element = render(<TypographyComponent text="Bootcamp-108" variant="h1" />)
    expect(element).toBeDefined()
  })

  test('renders the correct text', () => {
    const text = 'Hello, world!'
    const { getByText } = render(<TypographyComponent text={text} variant={'h1'} />)

    const typographyComponent = getByText(text)
    expect(typographyComponent).toBeInTheDocument()
  })
})
