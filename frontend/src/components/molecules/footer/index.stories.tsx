import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Footer from './index'
import { menuItems } from "../../../../src/constants";


export default {
title: 'Molecules/Footer',
component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => (

  <Footer {...args} />
)
export const SimpleFooter = Template.bind({})
SimpleFooter.args = {
  menuItems: menuItems,
}