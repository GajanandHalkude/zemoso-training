import React from "react";
import PaymentBody from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "organisms/paymentBody",
  component: PaymentBody,
} as ComponentMeta<typeof PaymentBody>;

const Template: ComponentStory<typeof PaymentBody> = (args) => (
  <PaymentBody {...args}/>
);

export const BuyCrypto = Template.bind({});
BuyCrypto.args = {
    TradeType:'BUY CRYPTO',
    TotalBitcoin:0.0234510,
    cointype:"BTC"
}

export const SellCrypto = Template.bind({});
SellCrypto.args = {
    TradeType:'SELL CRYPTO',
    TotalBitcoin:0.0456778,
    cointype:"ETH"
}