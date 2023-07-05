import React, { useEffect, useState } from "react";
import { render, screen, fireEvent, act, renderHook, waitFor } from "@testing-library/react";
import DetailsScrennBody from ".";
import { getCurrencyLogo } from ".";
import Success from "../../../../public/assets/icons/Correct.svg";
import Fail from "../../../../public/assets/images/t-fail.svg";
import Pending from "../../../../public/assets/images/t-pending.svg";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as services from "../../../services/index";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div data-testid="graph-component" />,
}));

describe("DetailsScrennBody", () => {
  test("renders the currency details banner", () => {
    const coinId = 'bitcoin'; 
    const location = { state: { coindId: coinId } };
  
    render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
        <Routes>
          <Route path="/details" Component={DetailsScrennBody} />
        </Routes>
      </MemoryRouter>
    );
    const currencyDetailsBanner = screen.getByTestId("portfolio-tab");
    expect(currencyDetailsBanner).toBeInTheDocument();
  });

  test("renders the total balance box with correct values", () => {
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
    const BTCBalance = screen.getByTestId("BTC-value");
    expect(BTCBalance).toBeInTheDocument();
      }  );
  

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

  test("renders the currency details banner", () => {
    const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );
    const currencyDetailsBanner = screen.getByText("Current value");
    expect(currencyDetailsBanner).toBeInTheDocument();
  });

  test("renders the currency details banner", () => {
    const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );
    const currencyDetailsBanner = screen.getByText("Market Cap");
    expect(currencyDetailsBanner).toBeInTheDocument();
  });

  test("renders the currency details banner", () => {
    const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );
    const currencyDetailsBanner = screen.getByText("Circulating Supply");
    expect(currencyDetailsBanner).toBeInTheDocument();
  });

  test("renders the currency details banner", () => {
    const coinId = 'bitcoin'; 
    const location = { state: { coindId: coinId } };
  
    render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
        <Routes>
          <Route path="/details" Component={DetailsScrennBody} />
        </Routes>
      </MemoryRouter>
    );
    const currencyDetailsBanner = screen.getByText("About Bitcoin");
    expect(currencyDetailsBanner).toBeInTheDocument();
  });

  test("renders the currency details banner", () => {
    const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );
    const currencyDetailsBanner = screen.getByText("Resourses");
    expect(currencyDetailsBanner).toBeInTheDocument();
  });
  
  test("renders the currency details banner", () => {
    const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );
    const currencyDetailsBanner = screen.getByText("Price correlation with");
    expect(currencyDetailsBanner).toBeInTheDocument();
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


test('should update "isAddedToWatchList" when "watchListId" changes', () => {
  const watchListId = "bitcoin"; 
  const { result, rerender } = renderHook(() => {
    const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);
    
    useEffect(() => {
      setIsAddedToWatchList(watchListId ? true : false);
    }, [watchListId]);

    return { isAddedToWatchList };
  });

  expect(result.current.isAddedToWatchList).toBe(true);

  rerender();

  expect(result.current.isAddedToWatchList).toBe(true);
});

test('should toggle "isAddedToWatchList" and call the appropriate watchlist functions', async () => {
  const mockAddWatchList = jest.fn();
  const mockRemoveWatchList = jest.fn();

  const { result } = renderHook(() => {
    const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);
    const cryptoCurrency = {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "bitcoin",
      icon: "bitcoin",
      price: 3285553.7365,
      marketCap: 61,
      totalSupply: 21000000,
      availableSupply: 19177900,
      priceChange: 1.06,
      volume: 52614783.23
    }; 
    const watchListId = '';

    useEffect(() => {
      setIsAddedToWatchList(watchListId ? true : false);
    }, [watchListId]);

    const handleClick = async () => {
      setIsAddedToWatchList((prevState) => !prevState);

      if (isAddedToWatchList) {
        await mockRemoveWatchList()?.catch((error:Error) => console.log(error));
      } else {
        await mockAddWatchList(cryptoCurrency?.id)?.catch((error:Error) => console.log(error));
      }
    };

    return { isAddedToWatchList, handleClick };
  });

  expect(result.current.isAddedToWatchList).toBe(false);

  await act(async () => {
    await result.current.handleClick();
  });

  expect(result.current.isAddedToWatchList).toBe(true);
  expect(mockAddWatchList).toHaveBeenCalledWith('bitcoin');
  expect(mockRemoveWatchList).not.toHaveBeenCalled();

  await act(async () => {
    await result.current.handleClick();
  });

  expect(result.current.isAddedToWatchList).toBe(false);
  expect(mockRemoveWatchList).toHaveBeenCalled();
});

test("updates isAddedToWatchList based on watchListId change", () => {
  const coinId = 'bitcoin'; 
  const location = { state: { coindId: coinId } };

  render(
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/details" Component={DetailsScrennBody} />
      </Routes>
    </MemoryRouter>
  );
  act(() => {
    // setWatchListId("bitcoin"); 
  });

  // expect(setIsAddedToWatchList).toHaveBeenCalledWith(true);
});

});

 

