import React from "react";
import MuiSlider from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:"atoms/slider",
    component:MuiSlider,

} as ComponentMeta<typeof MuiSlider>

const Template: ComponentStory<typeof MuiSlider> = (args) => (
  <MuiSlider {...args} />
);


export const Slider = Template.bind({})
Slider.args = {
    defaultValue:50,
    orientation:"vertical",
    min:10,
    max:100,
    step:2,
}