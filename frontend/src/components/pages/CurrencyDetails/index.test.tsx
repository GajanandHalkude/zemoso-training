import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CurrencyDetails from ".";
import {BrowserRouter as Router } from "react-router-dom";
jest.mock("react-apexcharts", () => ({
    __esModule: true,
    default: () => <div data-testid="graph-component" />,
  }));
describe("CurrencyDetails Component", () => {
  it("should render without errors", () => {
    render(<Router>
        <CurrencyDetails />
      </Router>);
  });
});

describe("DashBoardTemplate Component", () => {
  it("should render without errors", () => {
    render(<Router>
        <CurrencyDetails />
      </Router>);
  });

  it("should render the Header component correctly", () => {
    const { getByText } = render(<Router>
        <CurrencyDetails />
      </Router>);
    const headerElement = getByText("Trade");
    expect(headerElement).toBeInTheDocument();
  });

  it("should render the SideNavComponent component correctly", () => {
    const { getByTestId } = render(<Router>
        <CurrencyDetails />
      </Router>);
    const sideNavElement = getByTestId("sideNav");
    expect(sideNavElement).toBeInTheDocument();
  });

  it("should render the Footer component correctly", () => {
    const { getByText } = render(<Router>
        <CurrencyDetails />
      </Router>);
    const footerElement = getByText("NEED HELP");
    expect(footerElement).toBeInTheDocument();
  });
});

describe("DetailsScrennBody Component", () => {
  it("should render without errors", () => {
    render(<Router>
        <CurrencyDetails />
      </Router>);
  });
  
});
