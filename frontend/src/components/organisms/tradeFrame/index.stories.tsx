import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TradeFrame from ".";

export default {
    title:"organisms/TradeFrame",
    component:TradeFrame,
} as ComponentMeta<typeof TradeFrame>

const Template:ComponentStory<typeof TradeFrame> = ()=>(
    <TradeFrame/>
)
export const Primary = Template.bind({});