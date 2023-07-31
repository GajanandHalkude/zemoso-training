import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import MobileCountryCode from '.'
import Uk from '../../../../public/Icons/Uk.svg'
import Icons from '../../atoms/Icons'

describe('MobileCountryCode', () => {
  const countryIcon = <Icons src={Uk} alt="Uk" />
  it('should render correctly', () => {
    const { getByTestId } = render(
      <MobileCountryCode
        countryIcon={countryIcon}
        value="dsf"
        onChange={jest.fn()}
        data-testid="mobileCountryCode"
      />
    )
    expect(getByTestId('mobileCountryCode')).toBeInTheDocument()
  })
  it('check icons correctly rendered or not', () => {
    const { getByAltText } = render(
      <MobileCountryCode
        countryIcon={countryIcon}
        value="dsf"
        onChange={jest.fn()}
        data-testid="mobileCountryCode"
      />
    )
    expect(getByAltText('Uk')).toBeInTheDocument()
    expect(getByAltText('downArrow')).toBeInTheDocument()
    expect(getByAltText('divider')).toBeInTheDocument()
  })
  it('check error showing or not  not', () => {
    const { getByText } = render(
      <MobileCountryCode
        countryIcon={countryIcon}
        value="dsf"
        onChange={jest.fn()}
        data-testid="mobileCountryCode"
        errorMessages="Has Some error"
      />
    )
    const element = getByText('Has Some error')
    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle('color: #d32f2f')
  })
  it('Check onchange function is called or not', () => {
    const onChange = jest.fn()
    const { getByTestId } = render(
      <MobileCountryCode
        countryIcon={countryIcon}
        value="dsf"
        onChange={onChange}
        data-testid="mobileCountryCode"
      />
    )
    const element = getByTestId('mobileCountryCode').querySelector('input')
    fireEvent.change(element as HTMLInputElement, {
      target: { value: 'test' }
    })
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith('test')
  })
})
