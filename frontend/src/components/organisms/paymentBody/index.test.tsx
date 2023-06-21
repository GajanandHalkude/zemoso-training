import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import PaymentBody from ".";
import React from "react";

describe("PaymentBody", () => {
  it("renders the component with correct text and buttons", () => {
    const totalBitcoin = 1.2345;
    const tradeType = "BUY CRYPTO";
    render(
      <PaymentBody TotalBitcoin={totalBitcoin} TradeType={tradeType} />
    );

    // Check if the text is rendered correctly
    expect(
      screen.getByText(`${totalBitcoin} BTC`, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Purchase is completed/i)
    ).toBeInTheDocument();

    // Check if the buttons are rendered correctly
    expect(screen.getByRole("button", { name: /BUY CRYPTO/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /GO TO USD COIN/i })
    ).toBeInTheDocument();
  });
});