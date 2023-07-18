import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import PaymentSuccess, { PaymentSuccessProps } from "./";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

const mockLocation = (state: PaymentSuccessProps) => {
  (useLocation as jest.Mock).mockReturnValue({
    state,
  });
};

describe("PaymentSuccess Component", () => {
  const totalBitcoin = 1.5;
  const mockProps: PaymentSuccessProps = {
    totalBalance: 1.5,
    tradeType: 'BUY CRYPTO',
    cointype: 'BTC',
  };

  it("renders the component without errors", () => {
  const location = {state: { totalBalance:totalBitcoin, tradeType: 'BUY CRYPTO', cointype:'BTC'  } };
  render(
    
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/paymentsuccess" Component={PaymentSuccess} />
      </Routes>
    </MemoryRouter>

  );
  });

  it("displays the correct page name in the header", () => {
    mockLocation(mockProps);
    const { getByText } = render(
     
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
        <PaymentSuccess />
      </MemoryRouter>
  
    );
    const headerElement = getByText("Checkout");
    expect(headerElement).toBeInTheDocument();
  });
  

  it('renders the payment body component with the correct props', () => {
    mockLocation(mockProps);
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
        <PaymentSuccess />
      </MemoryRouter>
    );

    const paymentBodyElement = getByText(`${mockProps.totalBalance} BTC`);
    expect(paymentBodyElement).toBeInTheDocument();
  });
});
