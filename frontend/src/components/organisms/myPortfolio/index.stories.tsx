import React from "react";
import MyPortfolioOrg from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";


export default {
    title:"organisms/MyPortfolioOrg",
    component:MyPortfolioOrg,
} as ComponentMeta<typeof MyPortfolioOrg>

export const Template:ComponentStory<typeof MyPortfolioOrg> = (args)=>(
    <MyPortfolioOrg/>
)