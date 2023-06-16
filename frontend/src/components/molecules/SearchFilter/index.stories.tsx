import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import SearchField from './index'

export default {
  title: 'Molecules/SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>

const Template: ComponentStory<typeof SearchField> = (args) => (
  <SearchField {...args} />
)

export const SearchFieldWithoutFilter = Template.bind({})
SearchFieldWithoutFilter.args = {
  placeholder: 'Search all assets',
  filter: false,
}

// story with filter is true

export const SearchFieldWithFilter = Template.bind({})
SearchFieldWithFilter.args = {
  placeholder: 'Search all assets',
  filter: true,
}
