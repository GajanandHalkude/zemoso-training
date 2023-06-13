import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Footer from './index'

export default {
  title: 'Molecules/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => (
  <Footer/>
)

export const SimpleFooter = Template.bind({})