import React from "react";
import PortfolioTab from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import XrpIcon from "../../../../public/assets/images/Rectangle 4.svg";
import bitcoin from "../../../../public/assets/images/bitcoin.svg";
import etherium from "../../../../public/assets/images/ethreum.svg";
import tether from "../../../../public/assets/images/Tether.svg";

export default {
    title:"molecules/PortfolioTab",
    component:PortfolioTab,
} as ComponentMeta<typeof PortfolioTab>

const Template:ComponentStory<typeof PortfolioTab> = (args)=>
(
    <PortfolioTab {...args}/>
)

export const XRP = Template.bind({});
XRP.args = {
    icon:XrpIcon,
    cryptoCoinName:"XRP",
    shortNameOfCoin:"XRP",
   
    value:0.00,
    totalPercentage:0.00,
}
export const Bitcoin = Template.bind({});
Bitcoin.args = {
    icon:bitcoin,
    cryptoCoinName:"Bitcoin",
    shortNameOfCoin:"BTC",
    value:0.00,
    totalPercentage:0.00,
}
export const Etherium = Template.bind({});
Etherium.args = {
    icon:etherium,
    cryptoCoinName:"Etherium",
    shortNameOfCoin:"ETH",
    value:0.00,
    totalPercentage:0.00,
}
export const Tether = Template.bind({});
Tether.args = {
    icon:tether,
    cryptoCoinName:"Tether",
    shortNameOfCoin:"USDT",
    value:0.00,
    totalPercentage:0.00,
}

