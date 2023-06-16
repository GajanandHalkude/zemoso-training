import React from "react";
import TabsComponent from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";



export default {
    title:"molecules/TabsComponent",
    component:TabsComponent,
} as ComponentMeta<typeof TabsComponent>

const Template:ComponentStory<typeof TabsComponent> = (args)=>
(
    <TabsComponent {...args}/>
)

export const Tabs = Template.bind({});
Tabs.args = {
    label1:'Overview',
    label2:'Wallet',
    body1:"minet",
    body2:"seeder"
   
}