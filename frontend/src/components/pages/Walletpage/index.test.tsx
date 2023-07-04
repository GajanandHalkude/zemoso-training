import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import WalletPage from './';
import Chip from '../../atoms/chip';
import CustomTextField from '../../atoms/textField';
import Success from '../../../../public/assets/icons/Correct.svg';
import Fail from '../../../../public/assets/images/t-fail.svg';
import Pending from '../../../../public/assets/images/t-pending.svg';
import WalletBody, { getCurrencyLogo } from '../../organisms/walletBody';
import WalletTransactionTab from '../../molecules/walletTransactionTab';
import * as services from "../../../services/index";

describe('WalletPage', () => {
  it('should render the header, side navigation, footer, and wallet body', () => {
    render(
      <Router>
        <WalletPage />
      </Router>
    );

    const headerElement = screen.getByText('Trade');
    expect(headerElement).toBeInTheDocument();

    const sideNavElement = screen.getByTestId('sideNav');
    expect(sideNavElement).toBeInTheDocument();

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();

    const walletBodyElement = screen.getByTestId('walletBody');
    expect(walletBodyElement).toBeInTheDocument();

  });
  it('should render the header, side navigation, footer, and wallet body', () => {
    render(
      <Router>
        <WalletPage />
      </Router>
    );

    const headerElement = screen.getByText('CASH DEPOSIT');
    expect(headerElement).toBeInTheDocument();
  });

  
});

it('should render the chip atom with the correct label', () => {
  render(<Chip label="Test Chip" chipType={'rounded'} />);

  const chipLabel = screen.getByText('Test Chip');
  expect(chipLabel).toBeInTheDocument();
});
it("should handles text change correctly", () => {
  let value = "";

  const handleChange = (newValue: string) => {
    value = newValue;
  };

  render(
    <CustomTextField
      placeholder="Enter your text"
      value={value}
      onChange={handleChange}
      isPassword={false}
      width="100%"
      height={40}
      size="medium"
      borderRadius="8px"
    />
  );

  const textField = screen.getByPlaceholderText("Enter your text");
  fireEvent.change(textField, { target: { value: "Hello" } });

  expect(value).toBe("Hello");
});


describe("WalletTransactionTab", () => {
  const mockProps = {
    currencyLogo: "path/to/logo.png",
    currencyName: "Bitcoin",
    userDescription: "User description",
    currency: 10,
    marketCap: 1000,
    date: new Date("2023-01-01"),
    chiplabel: "Label",
  };

  test("Renders transaction details correctly", () => {
    render(<WalletTransactionTab {...mockProps} />);

    expect(screen.getByText("Jan")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByAltText("icon")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("User description")).toBeInTheDocument();
    expect(screen.getByText("+10 BTC")).toBeInTheDocument();
    expect(screen.getByText("+$1000")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
});
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
});

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

it(" should toggles password visibility correctly", () => {
  let value = "";

  const handleChange = (newValue: string) => {
    value = newValue;
  };

  render(
    <CustomTextField
      placeholder="Enter your password"
      value={value}
      onChange={handleChange}
      isPassword
      width="100%"
      height={40}
      size="medium"
      borderRadius="8px"
    />
  );

  const textField = screen.getByPlaceholderText("Enter your password");
  const toggleButton = screen.getByRole("button");

  fireEvent.change(textField, { target: { value: "Secret123" } });
  fireEvent.click(toggleButton);

  expect(textField.getAttribute("type")).toBe("text");

  fireEvent.click(toggleButton);

  expect(textField.getAttribute("type")).toBe("password");
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