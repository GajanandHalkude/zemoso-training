import React from 'react';
import { Story, Meta } from '@storybook/react';
import SignInTemplate, { AuthTemplateProp } from '.';
import signInImage from '../../../../public/assets/images/SignInImage.svg'
import SignInCard from '../../organisms/SignIn';
import ImageComponent from '../../atoms/Image';

export default {
  title: 'Templates/SignInTemplate',
  component: SignInTemplate,
} as Meta;

const Template: Story<AuthTemplateProp> = (args) => <SignInTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  img:<ImageComponent src={signInImage} data-testid="image" /> ,
  body: <div><SignInCard/></div>,
};
