import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ImageComponent from '.'

describe('ImageComponent', () => {
  test('renders the ImageComponent with the correct src', () => {
    const src = 'https://example.com/image.jpg'
    const { getByTestId } = render(<ImageComponent src={src} data-testid="image"/>)
    const imageElement = getByTestId('image').querySelector('img')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', src)
  })

  test('handles onClick event when clicked', () => {
    const onClickMock = jest.fn()
    const src = 'https://example.com/image.jpg'
    const { getByAltText } = render(
      <ImageComponent src={src} alt='img' onClick={onClickMock} />
    )
    const imageElement = getByAltText('img')

    fireEvent.click(imageElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('applies the correct alt text', () => {
    const src = 'https://example.com/image.jpg'
    const alt = 'Sample Image'
    const { getByAltText } = render(<ImageComponent src={src} alt={alt} />)
    const imageElement = getByAltText(alt)

    expect(imageElement).toBeInTheDocument()
  })

  test('hides the image when hidden prop is true', () => {
    const src = 'https://example.com/image.jpg'
    const { container } = render(<ImageComponent src={src} hidden={true} />)
    const imageElement = container.querySelector('img')

    expect(imageElement).toHaveStyle('display: none')
  })
})
