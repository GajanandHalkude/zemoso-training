import IconComponent from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LogOut from '../../../../public/assets/images/logout.svg'
import DashBoard from '../../../../public/assets/images/dashboard.svg'

export default {
  title: "atoms/IconComponent",
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args) => (
  <IconComponent {...args} />
);

export const IconComponentStory = Template.bind({});
IconComponentStory.args = {
  height: "32px",
  width: "32px",
  src: LogOut
};

export const IconComponentStory1 = Template.bind({});
IconComponentStory1.args = {
  src: DashBoard
};
