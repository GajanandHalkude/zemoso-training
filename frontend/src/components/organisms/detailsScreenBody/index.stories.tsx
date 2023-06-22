import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DetailsScrennBody from ".";

export default {
    title:"organisms/DetailsScrennBody",
    component:DetailsScrennBody,
} as ComponentMeta<typeof DetailsScrennBody>

const Template:ComponentStory<typeof DetailsScrennBody> = (args)=>(
    <DetailsScrennBody {...args}/>
)
export const Primary = Template.bind({});
Primary.args = {
coinBalance:0.02345,
currentValue:85364.96,
}
