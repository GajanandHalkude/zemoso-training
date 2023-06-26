import React from "react";
import { render, screen } from "@testing-library/react";
import AccountDetails, { AccountDetailsProps } from ".";
import '@testing-library/jest-dom/extend-expect';

describe("AccountDetails", () => {
  const handleChange = jest.fn();

  it("renders buy transaction correctly", () => {
    const props: AccountDetailsProps = {
      variant: "payment",
      title: "Payment Details",
      transactionType: "buy",
      balance: 1000,
      icon: "payment-icon",
      coinType: "Bitcoin",
      price: 50000,
      fee: "10",
      wallet: true,
      coin: "BTC",
      instantTime: "Instant",
      handleChange,
      deliveryTitle: "Delivery Options",
      coinSymbol: "₿",
    };

    render(<AccountDetails {...props} />);
    expect(screen.getByText("Payment Details")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    
  });

  it("renders sell transaction correctly", () => {
    const props: AccountDetailsProps = {
      variant: "balance",
      title: "Total Balance",
      transactionType: "sell",
      balance: 500,
      icon: "balance-icon",
      coinType: "Ethereum",
      price: 3000,
      fee: "5",
      wallet: true,
      coin: "ETH",
      instantTime: "Instant",
      handleChange,
      deliveryTitle: "Delivery Options",
      coinSymbol: "Ξ",
    };

    render(<AccountDetails {...props} />);
    expect(screen.getByText("Total Balance")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
   
  });

});
