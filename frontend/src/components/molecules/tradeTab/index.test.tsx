import { fireEvent, render, screen } from "@testing-library/react";
import TradeTab from ".";
import React from "react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe("TradeTab", () => {
  const mockProps = {
    icon: "icon-url",
    cryptoCoinName: "Bitcoin",
    shortNameOfCoin: "BTC",
    price: "$50,000.00",
    change: "+5.2",
    marketCap: "1.5",
  };

  test("renders component correctly with initial state", () => {
    render(<TradeTab {...mockProps} />);
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("BTC")).toBeInTheDocument();
    const starButton = screen.getByRole("button");
    expect(starButton).toBeInTheDocument();
  });
  
  test("toggle star button when clicked", () => {
    render(<TradeTab {...mockProps} />);
    const starButton = screen.getByRole("button");
    fireEvent.click(starButton);
  });
});
