import React from "react";
import CurrencyDetailsBanner from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:"molecules/currencyDetailsBanner",
    component:CurrencyDetailsBanner,
} as ComponentMeta<typeof CurrencyDetailsBanner>

const Template:ComponentStory<typeof CurrencyDetailsBanner> = (args)=>
(
    <CurrencyDetailsBanner {...args}/>
)

export const DetailsBanner = Template.bind({});
DetailsBanner.args = {
    aboutCurrency:"About Bitcoin",
}