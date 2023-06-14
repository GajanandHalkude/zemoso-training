import { render, screen } from "@testing-library/react";
import Footer from "./index";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { menuItems } from "../../../../src/constants";

describe("Footer", () => {
  test("renders correctly", () => {
    render(<Footer menuItems={menuItems} />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("displays the correct text in the Typography components", () => {
    render(<Footer menuItems={menuItems} />);
    menuItems.forEach((item) => {
      const element = screen.getByText(item.text);
      expect(element).toBeInTheDocument();
    });
  });

  
});
