import { type Meta, type Story } from '@storybook/react'
import React from 'react'
import ImageComponent from '.'
import image from '../../../../public/Assets/image.svg'
const meta: Meta<typeof ImageComponent> = {
  title: 'atoms/ImageComponent',
  component: ImageComponent
}

const Template: Story<typeof ImageComponent> = (args: any) => (
  <ImageComponent {...args} />
)
export const primary = Template.bind({})
primary.args = {
  src: image,
  width: '178px',
  height: '183px',
  alt: 'image'
}

export default meta
