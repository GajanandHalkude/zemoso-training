import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import IconButtonComponent from '.'

describe('IconButtonComponent', () => {
  test('renders the IconButtonComponent with the correct src', () => {
    const src = 'https://example.com/icon.png'
    const { getByAltText } = render(
      <IconButtonComponent src={src} onClick={() => {}} />
    )
    const iconElement = getByAltText('icon')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute('src', src)
  })

  test('applies the correct width and height', () => {
    const src = 'https://example.com/icon.png'
    const width = '40px'
    const height = '40px'
    const { container } = render(
      <IconButtonComponent
        src={src}
        width={width}
        height={height}
        onClick={() => {}}
      />
    )
    const iconBox = container.querySelector('div')

    expect(iconBox).toHaveStyle(`width: ${width}`)
    expect(iconBox).toHaveStyle(`height: ${height}`)
  })

  test('applies the correct padding', () => {
    const src = 'https://example.com/icon.png'
    const padding = '10px'
    const { container } = render(
      <IconButtonComponent src={src} padding={padding} onClick={() => {}} />
    )
    const iconImage = container.querySelector('img')

    expect(iconImage).toHaveStyle(`padding: ${padding}`)
  })

  test('calls onClick event handler when clicked', () => {
    const onClickMock = jest.fn()
    const src = 'https://example.com/icon.png'
    const { getByAltText } = render(
      <IconButtonComponent src={src} onClick={onClickMock} />
    )
    const iconElement = getByAltText('icon')

    fireEvent.click(iconElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
