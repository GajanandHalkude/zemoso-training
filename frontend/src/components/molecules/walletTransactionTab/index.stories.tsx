import React from "react";
import WalletTransactionTab from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from '../../../../public/assets/images/t-logo.svg'

export default {
    title:"molecules/WalletTransactionTab",
    component:WalletTransactionTab,
} as ComponentMeta<typeof WalletTransactionTab>

const Template:ComponentStory<typeof WalletTransactionTab> = (args)=>
(
    <WalletTransactionTab {...args}/>
)

export const Transaction = Template.bind({});
Transaction.args = {
    currencyLogo:Logo,
    currencyName:'Bitcoin',
    userDescription:'From Badgley',
    currency:'0.0010',
    marketCap:'900',
    date:new Date("2023-06-15"),
    chiplabel:'Purchased',
}