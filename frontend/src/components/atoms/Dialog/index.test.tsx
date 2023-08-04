/* eslint-disable react/no-children-prop */
import React from 'react'
import { render } from '@testing-library/react'
import Dialog from '.'
import { Box } from '@mui/material'
import TypographyComponent from '../Typography'
import '@testing-library/jest-dom'

describe('Dialog', () => {
  const children = (
    <Box>
      <TypographyComponent text="Hello World" variant="h1" />
    </Box>
  )
  test('renders correctly text is not showing', () => {
    render(<Dialog open={false} children={children} />)
  })
  test('renders correctly text is  showing', () => {
    const { getByText } = render(<Dialog open={true} children={children} />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
