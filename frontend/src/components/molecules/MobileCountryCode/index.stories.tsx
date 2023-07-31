import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import MobileCountryCode from '.'
import Uk from '../../../../public/Icons/Uk.svg'
import Icons from '../../atoms/Icons'

const meta: Meta<typeof MobileCountryCode> = {
  title: 'molecules/MobileCountryCode',
  component: MobileCountryCode,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof MobileCountryCode>

export const Default: Story = {
  args: {
    value: '',
    countryIcon: <Icons src={Uk} alt="Uk" />
  }
}
export const WithErrorMessage: Story = {
  args: {
    value: '',
    countryIcon: <Icons src={Uk} alt="Uk" />,
    errorMessages: 'Has Some Error'
  }
}
