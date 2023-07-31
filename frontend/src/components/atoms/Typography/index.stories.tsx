import { type Meta, type Story } from '@storybook/react'
import React from 'react'
import TypographyComponent, { type CustomTypographyProps } from '.'
const meta: Meta<typeof TypographyComponent> = {
  title: 'atoms/TypographyComponent',
  component: TypographyComponent,
  tags: ['autodocs']
}

const Template: Story<CustomTypographyProps> = (args) => (
    <TypographyComponent {...args} />
)

export const Caption = Template.bind({})
Caption.args = {
  text: 'Tell us what you’re using PocketPay for',
  variant: 'caption'
}

export const H1 = Template.bind({})
H1.args =
{
  text: 'What’s the purpose for using PocketPay?',
  variant: 'h1'
}

export const Body1 = Template.bind({})
Body1.args =
{
  text: 'Regular',
  variant: 'body1'
}

export const Body2 = Template.bind({})
Body2.args =
{
  text: 'Paying for goods or services abroad',
  variant: 'body2'
}

export const Body3 = Template.bind({})
Body3.args =
{
  text: 'To help us keep PocketPay safe and secure, please tell us what you’re using PocketPay for',
  variant: 'body3'
}
export const Link = Template.bind({})
Link.args =
{
  text: 'Click here',
  variant: 'link'
}

export default meta
