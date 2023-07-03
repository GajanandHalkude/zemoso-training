import React from "react";
import CurrencyDetails from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages/CurrencyDetails",
  component: CurrencyDetails,
} as ComponentMeta<typeof CurrencyDetails>;

const Template: ComponentStory<typeof CurrencyDetails> = () => (
  <Router>
    <CurrencyDetails />
  </Router>
);

export const Primary = Template.bind({});
