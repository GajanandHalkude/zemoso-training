import { render, screen } from "@testing-library/react";
import Footer from "./index";
import '@testing-library/jest-dom/extend-expect';
import React from "react";

describe("Footer", () => {
  test("renders correctly", () => {
    render(<Footer />);
    
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("displays the correct text in the Typography components", () => {
    render(<Footer />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Legal & Privacy")).toBeInTheDocument();
    expect(screen.getByText("© 2021 Minet")).toBeInTheDocument();
  });

  test("displays the ImageComponent and ButtonComponent with correct props", () => {
    render(<Footer />);
    expect(screen.getByRole("button")).toHaveTextContent("NEED HELP");
  });

});
