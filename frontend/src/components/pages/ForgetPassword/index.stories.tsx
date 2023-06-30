import React from "react";
import { Story } from "@storybook/react";
import ForgetPassword from "./index";

export default {
  title: "Pages/ForgetPassword",
  component: ForgetPassword,
};

const Template: Story = () => <ForgetPassword />;

export const Default = Template.bind({});
