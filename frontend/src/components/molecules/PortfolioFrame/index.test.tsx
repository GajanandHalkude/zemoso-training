import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PortfolioFrame from "./index";

describe("PortfolioFrame", () => {
  it("renders the component with correct text and image", () => {
    render(<PortfolioFrame />);
    const textElement1 = screen.getByText("10 coins (3 active)");
    expect(textElement1).toBeInTheDocument();
    const textElement2 = screen.getByText("Click on the currency name below to display it on the graph");
    expect(textElement2).toBeInTheDocument();
    const imageElement = screen.getByTestId("image");
    expect(imageElement).toBeInTheDocument();  
  });
});

