/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DetailsScrennBody from ".";
import { getCurrencyLogo } from ".";
import Success from "../../../../public/assets/icons/Correct.svg";
import Fail from "../../../../public/assets/images/t-fail.svg";
import Pending from "../../../../public/assets/images/t-pending.svg";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as services from "../../../services/index";
import { fetchCrtptoCurrenicyById, fetchWatchList } from "../../../services/index";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div data-testid="graph-component" />,
}));

describe("DetailsScrennBody", () => {
  test("allows searching for assets", () => {
    const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );
    const transactionBalance = screen.getByText("Wallet");
    expect(transactionBalance).toBeInTheDocument();
    fireEvent.click(transactionBalance);
    const searchField = screen.getByPlaceholderText("Search all assets");
    fireEvent.change(searchField, { target: { value: "Bitcoin" } });
    expect(searchField).toHaveValue("Bitcoin");
  });

  test("renders the transaction list", () => {
    
    const coinId = 'bitcoin'; 
    const location = { state: { coindId: coinId } };
  
    render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
        <Routes>
          <Route path="/details" Component={DetailsScrennBody} />
        </Routes>
      </MemoryRouter>
    );
    const transactionBalance = screen.getByText("Wallet");
    expect(transactionBalance).toBeInTheDocument();
    fireEvent.click(transactionBalance);
      const chips = screen.getByTestId("styledGridTransactions");
      expect(chips).toBeInTheDocument();
  });
  it("should fetch cryptocurrency data and set state", async () => {
    jest.mock("../../../services/index");
    const mockCryptoCurrency = {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      icon: "",
      price: 18000,
      marketCap: 1531564,
      totalSupply: 44125366,
      availableSupply: 85122,
      priceChange: 8.2,
      volume: 5245661,
    };

    const mockGraphData = [19418.037989243952, 19448.14900175761];

    const mockFetchCrtptoCurrenicyById = jest.spyOn(services, "fetchCrtptoCurrenicyById");
    mockFetchCrtptoCurrenicyById.mockResolvedValue(mockCryptoCurrency);

    const mockFetchWatchList = jest.spyOn(services, "fetchWatchList");
    mockFetchWatchList.mockResolvedValue([]);

    const mockGetGraphData = jest.spyOn(services, "getGraphData");
    mockGetGraphData.mockResolvedValue(mockGraphData);

    const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );

    await waitFor(() => {
      expect(mockFetchCrtptoCurrenicyById).toHaveBeenCalled();
      expect(mockFetchWatchList).toHaveBeenCalled();
    });
  });

it("should toggle 'isAddedToWatchList' and call the appropriate watch list functions", async () => {

  jest.spyOn(services, "addWatchList");
   jest.spyOn(services, "removeWatchList");

  const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };

  const { getByTestId } = render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );

  const watchListButton = getByTestId("addToWatchListButton");
  expect(watchListButton).toHaveTextContent("ADD TO WATCHLIST");

  fireEvent.click(watchListButton);
  expect(watchListButton).toHaveTextContent("ADDED TO WATCHLIST");
  
  fireEvent.click(watchListButton);
  expect(watchListButton).toHaveTextContent("ADD TO WATCHLIST");
});
test("returns the success logo for status 'success'", () => {
  const status = "success";
  const result = getCurrencyLogo(status);
  expect(result).toBe(Success); 
});
test("returns the pending logo for status 'pending'", () => {
  const status = "pending";
  const result = getCurrencyLogo(status);
  expect(result).toBe(Pending); 
});

test("returns the fail logo for any other status", () => {
  const status = "error";
  const result = getCurrencyLogo(status);
  expect(result).toBe(Fail); 
});

it('handles error when fetching currency data by Id', async () => {
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  (fetchCrtptoCurrenicyById as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch currency data'));

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching currency data:',
      expect.any(Error)
    );
  });

  consoleErrorSpy.mockRestore();
});
it('handles error for fetch transactions ', async () => {
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  (fetchWatchList as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch data'));

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );
  consoleErrorSpy.mockRestore();
});
it("should handle errors in fetching transactions and log the error", async () => {
  jest.spyOn(services, "fetchTransactions").mockRejectedValueOnce("Error fetching transactions");
  const consoleLogSpy = jest.spyOn(console, "log");
  const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };
  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );
  await waitFor(() => {
    expect(services.fetchTransactions).toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith("Error fetching transactions");
  });
  consoleLogSpy.mockRestore(); 
});
});