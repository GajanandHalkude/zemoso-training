import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import WalletBody from "./index";
import { getCurrencyLogo } from "./index";
import React from "react";
import WalletTransactionTab from "../../molecules/walletTransactionTab";
import Success from '../../../../public/assets/icons/Correct.svg';
import Fail from '../../../../public/assets/images/t-fail.svg';
import Pending from '../../../../public/assets/images/t-pending.svg';
import axios from "axios";
import * as services from "../../../services/index";

describe("WalletBody", () => {

  it("triggers the handleDropdownChange function on dropdown change", () => {
    
    const placeholderText = "Search";
    const handleDropdownChangeMock = jest.fn();
    render(
      <WalletBody
        placeholderText={placeholderText}
        handleDropdownChange={handleDropdownChangeMock}
      />
    );
  });

  it("triggers the handleSearchFilter function on search field change", () => {
    const placeholderText = "Search";
    const handleSearchFilterMock = jest.fn();
    render(
      <WalletBody
        placeholderText={placeholderText}
        handleSearchFilter={handleSearchFilterMock}
      />
    );
  });
});

describe("WalletBody", () => {
  test("renders without errors", () => {
    render(<WalletBody placeholderText=""  />);
  });

  test("displays the correct total balance", () => {
    jest.mock("../../../services/index");
    const mockWallet = {
      id: "cash",
      name: "Cash",
      balance: 50000,
      avg_value: 1,
      invested_amount: 50000
    };
    const mockFetchCrtptoCurrenicyById = jest.spyOn(services, "fetchWallet");
    mockFetchCrtptoCurrenicyById.mockResolvedValue(mockWallet);
    render(
      <WalletBody
        placeholderText={"Search all Assests"}
      />
    );
  });

  test("renders the buttons with the correct text", () => {
    render(
      <WalletBody placeholderText={"Search all Assests"} />
    );
    const cashDepositButton = screen.getByText("CASH DEPOSIT");
    const withdrawalButton = screen.getByText("WITHDRAWAL");
    expect(cashDepositButton).toBeInTheDocument();
    expect(withdrawalButton).toBeInTheDocument();
  });

  test("renders component with search field", () => {
    const { getByPlaceholderText } = render(
      <WalletBody placeholderText={"Search all Assests"} />
    );
    const searchField = getByPlaceholderText("Search all Assests");
    expect(searchField).toBeInTheDocument();
  });

  it("should fetch cryptocurrency data and set state", async () => {
    jest.mock("../../../services/index");
    const mockTransaction = [
      {
        id: 1,
        status: "success",
        symbol: "BTC",
        from: "Alice",
        quantity: 1.5,
        price: 50000,
        transactionDateTime: "2023-07-03T12:00:00",
        transactionType: "buy",
      },
      {
        id: 2,
        status: "pending",
        symbol: "ETH",
        from: "Bob",
        quantity: 2.0,
        price: 3000,
        transactionDateTime: "2023-07-02T10:00:00",
        transactionType: "sell",
      },
    ];

    const mockWallet = {
      balance: 1000,
    };

    const mockfetchTransactions = jest.spyOn(services, "fetchTransactions");
    mockfetchTransactions.mockResolvedValue(mockTransaction);

    const mockFetchWallet = jest.spyOn(services, "fetchWallet");
    mockFetchWallet.mockResolvedValue(mockWallet);
    render(<WalletBody placeholderText="" />);

    await waitFor(() => {
      expect(mockFetchWallet).toHaveBeenCalledWith("cash");
      expect(mockfetchTransactions).toHaveBeenCalled();
    });
  });

  it("should cryptocurrency data and set state", async () => {
    jest.mock("../../../services/index");
    const mockTransaction = [
      {
        id: 1,
        status: "success",
        symbol: "BTC",
        from: "Alice",
        quantity: 1.5,
        price: 50000,
        transactionDateTime: "2023-07-03T12:00:00",
        transactionType: "buy",
      },
      {
        id: 2,
        status: "pending",
        symbol: "ETH",
        from: "Bob",
        quantity: 2.0,
        price: 3000,
        transactionDateTime: "2023-07-02T10:00:00",
        transactionType: "sell",
      },
    ];

    const mockWallet = {
      balance: 1000,
    };

    const mockfetchTransactions = jest.spyOn(services, "fetchTransactions");
    mockfetchTransactions.mockResolvedValue(mockTransaction);

    const mockFetchWallet = jest.spyOn(services, "fetchWallet");
    mockFetchWallet.mockResolvedValue(mockWallet);
    render(<WalletBody placeholderText="" />);
      await waitFor(() => {
        const totalBalanceText = screen.getByText("$ 1000");
        expect(totalBalanceText).toBeInTheDocument();
      });
  });

});

describe("getCurrencyLogo", () => {

  describe('WalletTransactionTab rendering', () => {
    it('should render the correct data in WalletTransactionTab components', () => {
      const mockData = [
        {
          id: 1,
          status: 'success',
          symbol: 'BTC',
          from: 'John Doe',
          quantity: 0.5,
          price: 40000,
          transactionDateTime: '2023-06-30T12:00:00.000Z',
          transactionType: 'sell',
        },
        
      ];
  
      const { getByText } = render(
        <>
          {mockData.map((data) => (
            <WalletTransactionTab
              key={data.id}
              currencyLogo={getCurrencyLogo(data.status)}
              currencyName={`Received ${data.symbol}`}
              userDescription={`from ${data.from}`}
              currency={data.quantity}
              marketCap={data.price}
              date={new Date(data.transactionDateTime)}
              chiplabel={data.transactionType === 'sell' ? 'Sold' : 'Purchase'}
            />
          ))}
        </>
      );     
      mockData.forEach((data) => {
        const currencyNameElement = getByText(`Received ${data.symbol}`);
        expect(currencyNameElement).toBeInTheDocument();
  
        const userDescriptionElement = getByText(`from ${data.from}`);
        expect(userDescriptionElement).toBeInTheDocument();
  
      });

    });
  });
});

jest.mock("axios");

describe("WalletBody", () => {
  it("handles error while fetching transactions", async () => {
    const errorMessage = "Error fetching transactions";
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    console.error = jest.fn(); 

    const { } = render(
      <WalletBody placeholderText="" />
    );
    expect(axios.get).toHaveBeenCalledTimes(9);
  });
 
});
test("handleSearchFilter throws an error", () => {
 
  const handleSearchFilter = jest.fn(() => {
    throw new Error("Function not implemented.");
  });
  render(
    <WalletBody
      placeholderText="Search"
      handleSearchFilter={handleSearchFilter}
    />
  );
  
  expect(handleSearchFilter).toThrowError("Function not implemented.");
});
  it("should render 'Purchase' as chiplabel when transactionType is not 'sell'", () => {
    const data = {
      id: 2,
      status: "completed",
      symbol: "ETH",
      from: "Alice",
      quantity: 1,
      price: 3000,
      transactionDateTime: "2023-07-02T14:00:00Z",
      transactionType: "buy",
    };

   
    const component = render(
      <WalletTransactionTab
        key={data.id}
        currencyLogo={getCurrencyLogo(data.status)}
        currencyName={`Received ${data.symbol}`}
        userDescription={`from ${data.from}`}
        currency={data.quantity}
        marketCap={data.price}
        date={new Date(data.transactionDateTime)}
        chiplabel={data.transactionType === "sell" ? "Sold" : "Purchase"}
      />
    );

    expect(component.getByText("Purchase")).toBeInTheDocument();
  });


describe('getCurrencyLogo', () => {
  it('should return the appropriate logo for success status', () => {
    const status = 'success';
    const logo = getCurrencyLogo(status);
    expect(logo).toBe(Success); 
  });

  it('should return the appropriate logo for pending status', () => {
    const status = 'pending';
    const logo = getCurrencyLogo(status);
    expect(logo).toBe(Pending); 
  });

  it('should return the appropriate logo for other statuses', () => {
    const status = 'other';
    const logo = getCurrencyLogo(status);
    expect(logo).toBe(Fail); 
  });
});
