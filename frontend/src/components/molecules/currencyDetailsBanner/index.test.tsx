import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CurrencyDetailsBanner from ".";

describe("CurrencyDetailsBanner", () => {
  const aboutCurrency = "Bitcoin";

  it("renders the component without errors", () => {
    render(<CurrencyDetailsBanner aboutCurrency={aboutCurrency} />);
    // No need to assert anything in this test case, as long as it renders without errors
  });

  it("renders the currency banner data correctly", () => {
    // Modify this test case according to your requirements
  });
});