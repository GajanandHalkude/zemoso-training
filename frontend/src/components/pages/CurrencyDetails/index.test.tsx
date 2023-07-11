import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CurrencyDetails from ".";
import {MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { CurrencylocationState } from "../Sell";
import { Provider } from "react-redux";
import store from "../../../services/store";
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
      <Provider store={store}>
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>
   </Provider>);
  });
});

describe("DashBoardTemplate Component", () => {
  it("should render without errors", () => {
    render(
      <Provider store={store}>
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>
  </Provider>);
  });

  it("should render the Header component correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>
  </Provider>);
    const headerElement = getByText("Trade");
    expect(headerElement).toBeInTheDocument();
  });

  it("should render the SideNavComponent component correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
      <CurrencyDetails />
    </MemoryRouter>
    </Provider>
    );
    const sideNavElement = getByTestId("sideNav");
    expect(sideNavElement).toBeInTheDocument();
  });

  it("should render the Footer component correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>
  </Provider>);
    const footerElement = getByText("NEED HELP");
    expect(footerElement).toBeInTheDocument();
  });
});

describe("DetailsScrennBody Component", () => {
  it("should render without errors", () => {
    render(  <Provider store={store}>
    <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
    <CurrencyDetails />
  </MemoryRouter>
  </Provider>);
  });
  
});
