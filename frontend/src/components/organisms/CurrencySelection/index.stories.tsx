import React from "react";
import { Story, Meta } from "@storybook/react";
import ChipSlider from "./index";

export default {
  title: "organisms/ChipSlider",
  component: ChipSlider,
} as Meta;

const Template: Story = () => <ChipSlider />;


export const Default = Template.bind({});
