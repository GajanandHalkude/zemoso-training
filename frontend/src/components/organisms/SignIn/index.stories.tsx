import React from 'react';
import { Story, Meta } from '@storybook/react';
import SignInCard from './';

export default {
  title: 'organisms/SignInCard',
  component: SignInCard,
} as Meta;

const Template: Story = (args) => <SignInCard {...args} />;

export const Default = Template.bind({});
Default.args = {};