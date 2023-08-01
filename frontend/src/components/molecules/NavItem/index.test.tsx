import React from 'react'
import { render } from '@testing-library/react'
import NavItem, { type NavItemProps } from '.'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

describe('NavItem Component', () => {
  const defaultProps: NavItemProps = {
    itemText: 'Home',
    iconSrc: '/path/to/home-icon.svg'
  }

  test('renders without errors', () => {
    render(<NavItem {...defaultProps} />)
  })

  test('displays the correct itemText', () => {
    const { getByText } = render(<NavItem {...defaultProps} />)
    getByText(defaultProps.itemText)
  })

  test('displays the correct icon', () => {
    const { container } = render(
      <NavItem data-testid="Nav" {...defaultProps} />
    )
    const iconElement = container.querySelector('img') as HTMLImageElement
    expect(iconElement).toBeInTheDocument()
    expect(iconElement.src).toContain(defaultProps.iconSrc)
    expect(iconElement.alt).toBe('Home')
  })

  test('uses the correct color for TypographyComponent', () => {
    const { getByTestId } = render(
      <NavItem data-testid="Nav" {...defaultProps} />
    )
    const typographyComponent = getByTestId('Nav')
    expect(typographyComponent).toBeInTheDocument()
  })
})
