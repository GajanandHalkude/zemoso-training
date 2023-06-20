import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WalletBody from ".";

export default {
    title:"organisms/walletBody",
    component:WalletBody,
} as ComponentMeta<typeof WalletBody>

const Template:ComponentStory<typeof WalletBody> = (args)=>(
    <WalletBody {...args}/>
)
export const Primary = Template.bind({});
Primary.args = {
TotalBalance:34000,
placeholderText:"Search all assets",
}
