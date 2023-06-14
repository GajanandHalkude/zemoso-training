import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TypographyWithTextField from "./index";

const meta: ComponentMeta<typeof TypographyWithTextField> = {
  title: "molecules/TypographyWithTextField",
  component: TypographyWithTextField,
  argTypes: {
    label: { control: "text" },
    color: { control: "color" },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "onChange" },
    isPassword: { control: "boolean" },
    width: { control: "text" },
    height: { control: "text" },
    size: { control: "select", options: ["small", "medium"] },
    borderRadius: { control: "text" },
  },
};

const Template: ComponentStory<typeof TypographyWithTextField> = (args) => (
  <TypographyWithTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Password",
  color: "#344054",
  placeholder: "Enter your Password",
  value: "",
  onChange: () => {
    console.log();
  },
  isPassword: false,
  width: "50%",
  height: 40,
  size: "small",
  borderRadius: "8px",
};

export default meta;
