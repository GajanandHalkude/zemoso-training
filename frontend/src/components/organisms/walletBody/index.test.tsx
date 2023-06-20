import "@testing-library/jest-dom/extend-expect";
import WalletBody from "./";
import React from 'react'
import {
  render,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom'

describe("WalletBody", () => {
  test("renders without errors", () => {
    render(<WalletBody placeholderText="" TotalBalance={1000} />);
  });

  test("displays the correct total balance", () => {
    const totalBalance = 500;
    render(<WalletBody TotalBalance={totalBalance} placeholderText={"Search all Assests"} />);
    const totalBalanceElement = screen.getByText(`$ 500`);
    expect(totalBalanceElement).toBeInTheDocument();
  });

  test("renders the buttons with the correct text", () => {
    render(<WalletBody TotalBalance={1000} placeholderText={"Search all Assests"} />);
    const cashDepositButton = screen.getByText("CASH DEPOSIT");
    const withdrawalButton = screen.getByText("WITHDRAWAL");
    expect(cashDepositButton).toBeInTheDocument();
    expect(withdrawalButton).toBeInTheDocument();
  });

test('renders component with search field', () => {
    const { getByPlaceholderText } = render(<WalletBody TotalBalance={1000} placeholderText={"Search all Assests"} />);
        const searchField = getByPlaceholderText('Search all Assests');
    expect(searchField).toBeInTheDocument();
  });


})