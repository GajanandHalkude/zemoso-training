import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PortfolioTab from ".";

describe("PortfolioTab", () => {
  const mockProps = {
    icon: "path/to/icon",
    cryptoCoinName: "Bitcoin",
    shortNameOfCoin: "BTC",
    value: 3285553.375,
    totalPercentage: 100,
  };

  it("renders the component with correct props", () => {
    render(<PortfolioTab {...mockProps} />);
  });

  it("renders the icon with correct source", () => {
    render(<PortfolioTab {...mockProps} />);
  });
});