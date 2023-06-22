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
    isStarFilled:true
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
describe('TradeTab', () => {
  it('renders filled star icon when isStarFilled is true', () => {
    const { getByRole } = render(
      <TradeTab
        icon="path/to/icon"
        cryptoCoinName="Bitcoin"
        shortNameOfCoin="BTC"
        price="10000"
        change="5"
        marketCap="1.5"
        isStarFilled={true}
      />
    );
    const starIcon = getByRole('button', { name: 'icon' });
    expect(starIcon).toBeInTheDocument();
  });

  it('renders empty star icon when isStarFilled is false', () => {
    const { getByRole } = render(
      <TradeTab
        icon="path/to/icon"
        cryptoCoinName="Bitcoin"
        shortNameOfCoin="BTC"
        price="10000"
        change="5"
        marketCap="1.5"
        isStarFilled={false}
      />
    );
    const starIcon = getByRole('button', { name: 'icon' });
    expect(starIcon).toBeInTheDocument();
  });
});