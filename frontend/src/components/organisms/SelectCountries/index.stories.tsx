import { type Meta, type StoryObj } from '@storybook/react'
import SelectCountries from '.'

const meta: Meta<typeof SelectCountries> = {
  title: 'organisms/SelectCountries',
  component: SelectCountries,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof SelectCountries>

export const Example: Story = {}
