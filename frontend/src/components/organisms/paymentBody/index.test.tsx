import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import PaymentBody from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("PaymentBody", () => {
  it("renders the component with correct text and buttons", () => {
    const totalBitcoin = 1.2345;
    const tradeType = "BUY CRYPTO";
    render(
      <BrowserRouter>
      <PaymentBody TotalBitcoin={totalBitcoin} TradeType={tradeType} cointype={"Bitcoin"} />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/Purchase is completed/i)
    ).toBeInTheDocument();

    
    expect(screen.getByRole("button", { name: /BUY CRYPTO/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /GO TO USD COIN/i })
    ).toBeInTheDocument();
  });
});