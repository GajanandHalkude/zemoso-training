import { fireEvent, render, screen } from '@testing-library/react'
import ProfileModal from '.'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'

describe('testing profile modal molecule', () => {
  const name = 'Ross Gener'

  test('renders the compoonent when isOpen is true', () => {
    render(<ProfileModal isOpen={true} />)
    const profileModalElement = screen.queryByText(name)
    expect(profileModalElement).toBeInTheDocument()
  })
  test('renders the compoonent when isOpen is false', () => {
    render(<ProfileModal isOpen={false} />)
    const profileModalElement = screen.queryByText(name)
    expect(profileModalElement).not.toBeInTheDocument()
  })
  test('calls onClick when logout is clicked', () => {
    const onClick = jest.fn()
    render(<ProfileModal isOpen={true} onClick={onClick} />)
    const logoutButton = screen.getByText('Logout')
    fireEvent.click(logoutButton)
    expect(onClick).toBeCalledTimes(1)
  })
})
