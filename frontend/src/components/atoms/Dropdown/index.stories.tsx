import { type Meta, type StoryObj } from '@storybook/react'
import Dropdown from '.'
import { category, countries } from './constant'

const meta: Meta<typeof Dropdown> = {
  title: 'ATOMS/Dropdown',
  component: Dropdown,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const selectYourCountry: Story = {
  args: {
    values: countries,
    placeholder: 'Select your country',
    onChangeHandler: (e) => {
      console.log(e)
    }
  }
}

export const categories: Story = {
  args: {
    values: category,
    placeholder: 'category',
    onChangeHandler: (e) => {
      console.log(e)
    }
  }
}
