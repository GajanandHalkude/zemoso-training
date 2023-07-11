import { render, screen } from "@testing-library/react";
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
    isStarFilled:true
  };

  test("renders component correctly with initial state", () => {
    render(<TradeTab {...mockProps} />);
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("BTC")).toBeInTheDocument();
  });
  test('displays positive change with a "+" sign', () => {
    const props = {
      icon: 'icon-url',
      cryptoCoinName: 'Bitcoin',
      shortNameOfCoin: 'BTC',
      price: 50000,
      change: 0.05,
      marketCap: 1000000000,
    };

    render(<TradeTab {...props} />);

    const changeTextElement = screen.getByTestId('change-text');
    const changeText = changeTextElement.textContent;

    expect(changeText).toMatch(/\+0\.05%/i);
  });

  test('displays negative change without a "+" sign', () => {
    const props = {
      icon: 'icon-url',
      cryptoCoinName: 'Bitcoin',
      shortNameOfCoin: 'BTC',
      price: 50000,
      change: -0.1,
      marketCap: 1000000000,
    };

    render(<TradeTab {...props} />);

    const changeTextElement = screen.getByTestId('change-text');
    const changeText = changeTextElement.textContent;

    expect(changeText).toMatch(/\-0\.1%/i);
    
  });

});
