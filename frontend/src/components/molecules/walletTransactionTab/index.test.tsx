import { render, screen } from "@testing-library/react";
import WalletTransactionTab from ".";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

describe("WalletTransactionTab", () => {
  const mockProps = {
    currencyLogo: "path/to/logo.png",
    currencyName: "Bitcoin",
    userDescription: "User description",
    currency: 10,
    marketCap: 1000,
    date: new Date("2023-01-01"),
    chiplabel: "Label",
  };

  test("Renders transaction details correctly", () => {
    render(<WalletTransactionTab symbol={"BTC"} {...mockProps} />);

    expect(screen.getByText("Jan")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByAltText("icon")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("User description")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
});
