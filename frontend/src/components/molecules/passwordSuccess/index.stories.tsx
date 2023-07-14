import { ComponentMeta, ComponentStory } from "@storybook/react";
import tick from "../../../../public/assets/images/tick-circle.svg";
import PasswordSuccesful from ".";
import React from "react";


export default 
{
    title:"molecules/passwordSuccess",
    component:PasswordSuccesful,
} as ComponentMeta<typeof PasswordSuccesful >
 
const Template:ComponentStory<typeof PasswordSuccesful> = (args)=>(

    <PasswordSuccesful {...args}></PasswordSuccesful>
)

export const PasswordResetSuccessful = Template.bind({});
PasswordResetSuccessful.args = {
    heading:"Password reset successful",
    subtitle:"Click on button below to proceed to login",
    icon:tick,
}