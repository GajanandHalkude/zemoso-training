import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ForgetPassword from "./index";

const meta: ComponentMeta<typeof ForgetPassword> = {
  title: "organisms/ForgetPassword",
  component: ForgetPassword,
};

const Template: ComponentStory<typeof ForgetPassword> = (args) => (
  <ForgetPassword {...args} />
);

export const SendEmail = Template.bind({});
SendEmail.args = {
  label: "Email",
  buttonText: "Send Reset Link",
  isSendLink: true,
};

export const ResetCode = Template.bind({});
ResetCode.args = {
  label: "Reset Code",
  buttonText: "Reset Password",
  isSendLink: false,
};

export default meta;
