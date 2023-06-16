import React from "react";
import SideNavComponent from ".";
import {ComponentMeta, ComponentStory} from "@storybook/react"

export default {
  title: "molecules/SideNav",
  component: SideNavComponent,
}as ComponentMeta<typeof SideNavComponent>;

const Template: ComponentStory<typeof SideNavComponent> = () => (
  <SideNavComponent />
)

export const SideNavigation = Template.bind({})