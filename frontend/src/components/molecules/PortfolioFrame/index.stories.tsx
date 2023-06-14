import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PortfolioFrame from "./index";

export default {
  title: "molecules/PortfolioFrame",
  component: PortfolioFrame,
} as ComponentMeta<typeof PortfolioFrame>;

const Template: ComponentStory<typeof PortfolioFrame> = (args) => (
  <PortfolioFrame {...args} />
);

export const Default = Template.bind({});
Default.args = {};

