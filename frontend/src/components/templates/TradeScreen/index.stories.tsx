import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TradeScreenTemplate from ".";
import Header from "../../molecules/Header";
import { menuItems } from "../../../constants";
import Footer from "../../molecules/footer";
import SideNavComponent from "../../molecules/sideNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import TradeFrame from "../../organisms/tradeFrame";

export default {
  title: "Templates/TradeScreen",
  component: TradeScreenTemplate,
} as ComponentMeta<typeof TradeScreenTemplate>;

const Template: ComponentStory<typeof TradeScreenTemplate> = (args) => (
  <Router>
    <TradeScreenTemplate {...args} />
  </Router>
);

export const Primary = Template.bind({});
Primary.args = {
  header: <Header pageName="Dashboard" displayButtons />,
  footer: <Footer menuItems={menuItems} buttonLabel="Need Help" />,
  sideNav: <SideNavComponent />,
  children: <div style={{ height: "896px", width: "100%" }}><TradeFrame/></div>,
  paddingTop:'24px',
};
