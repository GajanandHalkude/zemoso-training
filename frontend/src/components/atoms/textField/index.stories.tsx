import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomTextField from "./index";

export default {
  title: "Atoms/CustomTextField",
  component: CustomTextField,
} as ComponentMeta<typeof CustomTextField>;

const Template: ComponentStory<typeof CustomTextField> = (args) => (
  <CustomTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your text",
  value: "",
  onChange: (value: string) => console.log(value),
  isPassword: false,
  width: "20%",
  height: 40,
  size: "medium",
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "Password",
  value: "",
  onChange: (value: string) => console.log(value),
  isPassword: true,
  width: "20%",
  height: 40,
  size: "medium",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  placeholder: "Small size",
  value: "",
  onChange: (value: string) => console.log(value),
  isPassword: false,
  width: "20%",
  height: 40,
  size: "small",
};
