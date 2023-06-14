import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Footer from './index'

export default {
title: 'Molecules/Footer',
component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => (

  <Footer {...args} />
)
export const SimpleFooter = Template.bind({})
SimpleFooter.args = {
menuItems: [
{ text: 'Dashboard' },
{ text: 'Careers' },
{ text: 'Legal & Privacy' },
{ text: '© 2021 Minet', isBlack: true },
],
}