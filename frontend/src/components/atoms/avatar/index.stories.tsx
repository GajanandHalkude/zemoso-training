import React from "react";
import  AvatarComponent  from ".";
import {ComponentStory} from "@storybook/react"

export default{
    title: 'atoms/Avatar',
    component: AvatarComponent
}

const Template: ComponentStory<typeof AvatarComponent> = (args: any) => (
    <AvatarComponent {...args} />
  )

export const AvatarComponentStory = Template.bind({})
AvatarComponentStory.args={
    height: '32px',
    width: '32px',
}

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  height: '24px',
  width: '24px',
};

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
  height: '64px',
  width: '64px',
};

export {}
