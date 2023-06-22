import React from "react";
import TradeTab from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BitCoin from "../../../../public/assets/images/bitcoin.svg";


export default {
    title:"molecules/TradeTab",
    component:TradeTab,
} as ComponentMeta<typeof TradeTab>

const Template:ComponentStory<typeof TradeTab> = (args)=>
(
    <TradeTab {...args}/>
)

export const Bitcoin = Template.bind({});
Bitcoin.args = {
    icon:BitCoin,
    cryptoCoinName:"Bitcoin",
    shortNameOfCoin:"BTC",
    price:"3,253,553.73",
    change:'+1.06',
    marketCap:'60.1',
    isStarFilled:false
}