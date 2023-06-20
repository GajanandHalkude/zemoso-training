import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CurrencySelector from "./";


describe("CurrencySelector", () => {
    test("renders the component correctly", () => {
        render(<CurrencySelector />);
      });

  test("renders the component", () => {
    render(<CurrencySelector />);
    const chipSlider = screen.getByTestId("chip-slider");
    expect(chipSlider).toBeInTheDocument();
  });

  
  test("renders the crypto coin chips", () => {
    render(<CurrencySelector />);
    const cryptoCoins = [
      { name: "Bitcoin", color: "gold" },
      { name: "Ethereum", color: "blue" },
     
    ];
    cryptoCoins.forEach((coin) => {
      const chip = screen.getByText(coin.name);
      expect(chip).toBeInTheDocument();
    });
  });

});




  