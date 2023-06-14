import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SocialLogin from ".";
import FaceBook from '../../../../public/assets/images/facebook.svg'
import GoogleLogo from '../../../../public/assets/images/google.svg'
import MicrosoftLogo from '../../../../public/assets/images/xero.svg'

export default {
  title: "molecules/SocialLogin",
  component: SocialLogin,
} as ComponentMeta<typeof SocialLogin>;

const Template: ComponentStory<typeof SocialLogin> = (args) => (
  <SocialLogin {...args} />
);

export const GoogleLogin = Template.bind({});
GoogleLogin.args = {
    text:'Google',
    src: GoogleLogo
};
export const FaceBookLogin = Template.bind({});
FaceBookLogin.args = {
    text:'Facebook',
    src: FaceBook
};
export const MicrosoftLogin = Template.bind({});
MicrosoftLogin.args = {
    text:'Microsoft',
    src: MicrosoftLogo
};
