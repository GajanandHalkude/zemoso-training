import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CurrencyDetails from ".";
import {MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { CurrencylocationState } from "../Sell";

jest.mock("react-apexcharts", () => ({
    __esModule: true,
    default: () => <div data-testid="graph-component" />,
  }));
  const mockProps: CurrencylocationState  = {
    coindId: 'bitcoin'
  };
describe("CurrencyDetails Component", () => {
  it("should render without errors", () => {
    render(
    
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>
);
  });
});

describe("DashBoardTemplate Component", () => {
  it("should render without errors", () => {
    render(
    
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>
 );
  });

  it("should render the Header component correctly", () => {
    const { getByText } = render(
     
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>
);
    const headerElement = getByText("Trade");
    expect(headerElement).toBeInTheDocument();
  });

  it("should render the SideNavComponent component correctly", () => {
    const { getByTestId } = render(
     
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
      <CurrencyDetails />
    </MemoryRouter>
    );
    const sideNavElement = getByTestId("sideNav");
    expect(sideNavElement).toBeInTheDocument();
  });

  it("should render the Footer component correctly", () => {
    const { getByText } = render(
     
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>);
    const footerElement = getByText("NEED HELP");
    expect(footerElement).toBeInTheDocument();
  });
});

describe("DetailsScrennBody Component", () => {
  it("should render without errors", () => {
    render( 
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>);
  });
  
});
