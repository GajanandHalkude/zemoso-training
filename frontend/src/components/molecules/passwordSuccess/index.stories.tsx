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
    heading:"Password Reset successful",
    subtitle:"Click on the button below to proceed login",
    icon:tick,
}