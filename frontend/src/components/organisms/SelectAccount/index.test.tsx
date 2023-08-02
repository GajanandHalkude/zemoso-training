import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import SelectAccountCard from '.'
import { AccountCards } from './constant'

describe('SelectAccount', () => {
  test('should render', () => {
    render(<SelectAccountCard onClick={jest.fn()} />)
  })
  test('check all text coming properly or not', () => {
    const { getByText } = render(<SelectAccountCard onClick={jest.fn()} />)
    AccountCards.forEach(({ title, description }) => {
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(description)).toBeInTheDocument()
    })
  })
  test('check onclick properly working not not', () => {
    const onClick = jest.fn()
    const { getByText } = render(<SelectAccountCard onClick={onClick} />)
    const personalCard = getByText(AccountCards[0].title)
    fireEvent.click(personalCard)
    expect(onClick).toBeCalledWith(AccountCards[0].data)
    const acountCard = getByText(AccountCards[1].title)
    fireEvent.click(acountCard)
    expect(onClick).toBeCalledWith(AccountCards[1].data)
  })
})
