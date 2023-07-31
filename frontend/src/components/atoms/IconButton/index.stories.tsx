import React from 'react'
import IconButtonComponent from '.'
import { type Meta, type Story } from '@storybook/react'
import google from '../../../../public/Icons/G.svg'
import facebook from '../../../../public/Icons/Facebook.svg'
import apple from '../../../../public/Icons/Apple.svg'
const meta: Meta<typeof IconButtonComponent> = {
  title: 'atoms/IconButtonComponent',
  component: IconButtonComponent
}

const Template: Story<typeof IconButtonComponent> = (args) => (
  <IconButtonComponent {...args} />
)

export const Google = Template.bind({})
Google.args = {
  height: '56px',
  width: '56px',
  src: google,
  padding: '14px'
}
export const Facebook = Template.bind({})
Facebook.args = {
  height: '56px',
  width: '56px',
  src: facebook,
  padding: '14px'
}
export const Apple = Template.bind({})
Apple.args = {
  height: '56px',
  width: '56px',
  src: apple,
  padding: '14px'
}
export default meta
