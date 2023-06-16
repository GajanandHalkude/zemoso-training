import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PortfolioValueComponent from '.'

export default {
  title: 'molecules/TotlaInverstmentComponent',
  component: PortfolioValueComponent,
} as ComponentMeta<typeof PortfolioValueComponent>

const Template: ComponentStory<typeof PortfolioValueComponent> = (args) => (
    <PortfolioValueComponent {...args}/>
)
export const PortfolioValueTypography = Template.bind({})
PortfolioValueTypography.args = {
    typeOfInvestment: 'Total Investment',
    percentChange: -0,
    isInDashBoardPage: true,
    investmentValue: 56890.73,
    width: '177px'
}
export const BitcoinPortfolioValueTypography = Template.bind({})
BitcoinPortfolioValueTypography.args = {
    typeOfInvestment: 'Bitcoin',
    isInDashBoardPage: true,
    percentChange: -1.3,
    investmentValue: 56890.27,
    width: '145px'
}
export const BitcoinPagePortfolioValueTypography = Template.bind({})
BitcoinPagePortfolioValueTypography.args = {
    typeOfInvestment: 'Current Value',
    isInDashBoardPage: false,
    percentChange: -2.3,
    investmentValue: 56890890.57,
    width: '186px'
}