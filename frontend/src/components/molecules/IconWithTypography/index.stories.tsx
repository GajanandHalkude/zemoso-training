import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import IconWithTypography from './index'
import theme from '../../../theme'
import IncreasingTrendArrow from "../../../../public/assets/icons/greenIncreasingTrend.svg";

export default {
  title: 'molecules/IconWithTypography',
  component: IconWithTypography,
} as ComponentMeta<typeof IconWithTypography>

const Template: ComponentStory<typeof IconWithTypography> = (args: any) => (
  <IconWithTypography {...args} />
)

export const IconWithTypographyStory = Template.bind({});
IconWithTypographyStory.args = {
  image: IncreasingTrendArrow,
  imageHeight: "9px",
  imageWidth: "9px",
  text: "+1.2%",
  iconandtextgap: "7px",
  textVariant: "overline",
  textColor: theme.palette.primary.success500,
};
