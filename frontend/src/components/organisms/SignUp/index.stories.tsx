import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SignUp from './index';

export default {
  title: 'organisms/SignUp',
  component: SignUp,
} as Meta;

const Template: Story = (args) => <SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {};
