import React from 'react'
import { getByTestId, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfilePic from '../../../../public/Assets/profile.svg'
import Avatar from '.'

describe('Testing Avatar Atoms', () => {
  it('Checking avatar with is rendering properly or not', () => {
    render(<Avatar alt="Profile Pic" src={ProfilePic} />)
    getByTestId(document.documentElement, 'avatar')
  })
  it('Checking avatar with is circular or not ', () => {
    render(<Avatar alt="Profile Pic" src={ProfilePic} />)
    const element = getByTestId(document.documentElement, 'avatar')
    expect(element).toHaveClass('MuiAvatar-circular')
  })
})
