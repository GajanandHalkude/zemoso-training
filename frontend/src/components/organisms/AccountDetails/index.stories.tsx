import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import AccountDetails, { AccountDetailsProps } from "./";
import bitcion from "../../../../public/assets/images/bitcoin.svg";
import etherium from "../../../../public/assets/images/ethreum.svg";

export default {
  title: "organisms/AccountDetails",
  component: AccountDetails,
} as Meta;

const Template: ComponentStory<typeof AccountDetails> = (args) => (
  <AccountDetails {...args} />
);

export const BuyTransaction = Template.bind({});
BuyTransaction.args = {
  variant: "payment",
  title: "Payment Method",
  transactionType: "buy",
  balance: 10000,
  icon: bitcion,
  coinType: "Bitcoin",
  price: 50000,
  fee: "10",
  wallet: true,
  coin: "Bitcoin BTC",
  instantTime: "2-5",
  deliveryTitle: "Select speed delivery",
  handleChange: (quantity, amount) => {
    quantity + amount;
  },
};


export const SellTransaction = Template.bind({});
SellTransaction.args = {
  transactionType: "sell",
  balance: 1000,
  icon: etherium,
  coinType: "Ethereum",
  price: 3000,
  wallet: true,
  coin: "ETH",
  coinSymbol: "ETH",
  handleChange: (quantity, amount) => {
    quantity + amount;
  },
};
