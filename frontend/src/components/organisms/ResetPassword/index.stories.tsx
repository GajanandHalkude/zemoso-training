import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ResetPassword from "./index";

export default {
  title: "organisms/ResetPassword",
  component: ResetPassword,
} as ComponentMeta<typeof ResetPassword>;

const Template: ComponentStory<typeof ResetPassword> = (args) => (
  <ResetPassword {...args} />
);

export const Default = Template.bind({});
Default.args = {};

