import React from 'react'
import CheckboxComponent from '.'
import { type Meta, type Story } from '@storybook/react'

const meta: Meta<typeof CheckboxComponent> = {
  title: 'atoms/Checkbox',
  component: CheckboxComponent
}
const Temaplate: Story<typeof CheckboxComponent> = (args) => (
    <CheckboxComponent {...args}/>
)
export const primary = Temaplate.bind({})
primary.args = {
  onClick: () => { console.log('Clicked on checkbox') }
}

export default meta
