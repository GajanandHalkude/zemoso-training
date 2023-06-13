import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import MuiTypography from "."

export default {
    title:"atoms/typography",
    component:MuiTypography,
} as ComponentMeta<typeof MuiTypography>

const Template:ComponentStory<typeof MuiTypography> = (args)=>(
    <MuiTypography {...args}></MuiTypography>
)

export const Heading1 = Template.bind({})
Heading1.args=
{
    text:"heading1",
    variant:"h2",
};

export const Overline = Template.bind({})
Overline.args=
{
    text:"Overline",
    variant:"overline"
}

export const Body2 = Template.bind({})
Body2.args=
{
    text:"Body2",
    variant:"body2"
}

export const Subtitle2 = Template.bind({})
Subtitle2.args=
{
    text:"Subtitle2",
    variant:"subtitle2"
}

export const Heading6 = Template.bind({})
Heading6.args=
{
    text:"Heading6",
    variant:"h6"
}