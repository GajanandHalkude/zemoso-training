import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomeTemplate from './index'
import Header from '../../molecules/Header'
import Footer from '../../molecules/footer'
import SideNavCompnent from '../../molecules/sideNavbar'
import React from 'react'
import { menuItems } from '../../../constants'
import { BrowserRouter as Router } from "react-router-dom";


export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>

const Template: ComponentStory<typeof HomeTemplate> = (args) => (
  <Router>
    <HomeTemplate {...args} />
  </Router>
);

export const SimpleHomeTemplate = Template.bind({});

SimpleHomeTemplate.args = {
  header: <Header pageName="Dashboard" displayButtons />,
  footer: <Footer menuItems={menuItems} buttonLabel='Need Help' />,
  sideNav: <SideNavCompnent />,
  children: <div style={{ height: "896px", width: "100%" }}>content</div>,
};