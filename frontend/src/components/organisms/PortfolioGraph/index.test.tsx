import React from "react";
import "jest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PortfolioGraphComponent from "./index";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

describe("PortfolioGraphComponent", () => {
  test("renders investment details correctly in non-dashboard page", () => {
    const props = {
      height: "400px",
      width: "600px",
      categories: ["Jan", "Feb", "Mar"],
      borderColor: "#ff0000",
      fillColor: "#ff0000",
      dashboardPage: false,
      data: [10, 20, 30],
      investmentValue: 1000,
      typeOfInvestment: "Bitcoin",
      percentChange: 10,
    };

    render(<PortfolioGraphComponent {...props} />);

    expect(screen.getByText("$1,000.00")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("10.0%")).toBeInTheDocument();
    expect(screen.getByTestId("tabs")).toBeInTheDocument();
  });

  test("renders investment details correctly in dashboard page", () => {
    const props = {
      height: "400px",
      width: "600px",
      categories: ["Jan", "Feb", "Mar"],
      borderColor: "#ff0000",
      fillColor: "#ff0000",
      dashboardPage: true,
      data: [10, 20, 30],
      data2: [15, 25, 35],
      investmentValue: 1000,
      typeOfInvestment: "Bitcoin",
      percentChange: 10,
      investmentValue2: 2000,
      typeOfInvestment2: "Ethereum",
      percentChange2: 20,
    };

    render(<PortfolioGraphComponent {...props} />);

     expect(screen.getByText("$1,000.00")).toBeInTheDocument();
     expect(screen.getByText("Bitcoin")).toBeInTheDocument();
     expect(screen.getByText("10.0%")).toBeInTheDocument();
    expect(screen.getByText("$2,000.00")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
    expect(screen.getByText("20.0%")).toBeInTheDocument();
    expect(screen.getByTestId("tabs")).toBeInTheDocument();
  });

  test("renders investment details correctly in dashboard page if investmentValue2 are not passed", () => {
    const props = {
      height: "400px",
      width: "600px",
      categories: ["Jan", "Feb", "Mar"],
      borderColor: "#ff0000",
      fillColor: "#ff0000",
      dashboardPage: true,
      data: [10, 20, 30],
      investmentValue: 1000,
      typeOfInvestment: "Bitcoin",
      percentChange: 10
    };

    render(<PortfolioGraphComponent {...props} />);

    expect(screen.getByText("$0.00")).toBeInTheDocument();
    expect(screen.getByText("0.0%")).toBeInTheDocument();
    expect(screen.getByText("$1,000.00")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("10.0%")).toBeInTheDocument();
  });
});
