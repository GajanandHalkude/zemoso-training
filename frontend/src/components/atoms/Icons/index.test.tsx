import { fireEvent, render } from '@testing-library/react'
import Icons from '.'
import React from 'react'
import logo from '../../../../public/assests/icons/close.svg'

const mockClickHandler = jest.fn()

describe('testing Icons', () => {
  test('Icon is clickable and clickHandler is called', () => {
    const { getByAltText } = render(
      <Icons src={logo} alt="Icon" clickHandler={mockClickHandler} />
    )

    const iconElement = getByAltText('Icon')

    fireEvent.click(iconElement)

    expect(mockClickHandler).toHaveBeenCalledTimes(1)
  })
})
