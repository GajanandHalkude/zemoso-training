import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from "react-router-dom";
import PaymentSuccess from "./";

describe("PaymentSuccess Component", () => {
  const totalBitcoin = 1.5;
  const tradeType = "BUY CRYPTO";

  it("renders the component without errors", () => {
    render(
      <Router>
      <PaymentSuccess totalBitcoin={totalBitcoin} tradeType={tradeType} cointype={"BTC"} />
  </Router>
    );
  });

  it("displays the correct page name in the header", () => {
    const { getByText } = render(
      <Router>
      <PaymentSuccess totalBitcoin={totalBitcoin} tradeType={tradeType} cointype={"BTC"} />
      </Router>
    );

    const headerElement = getByText("Checkout");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders the payment body component with the correct props", () => {
    const { getByText } = render(
      <Router>
      <PaymentSuccess totalBitcoin={totalBitcoin} tradeType={tradeType} cointype={"BTC"} />
      </Router>
    );

    const paymentBodyElement = getByText(`${totalBitcoin} BTC`);
    expect(paymentBodyElement).toBeInTheDocument();
  });
});
