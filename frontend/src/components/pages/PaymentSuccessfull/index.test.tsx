import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import PaymentSuccess, { PaymentSuccessProps } from "./";
import { Provider } from "react-redux";
import store from "../../../services/store";

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
    <Provider store={store}>
    <MemoryRouter initialEntries={[{ pathname: '/details', state: location }]}>
      <Routes>
        <Route path="/paymentsuccess" Component={PaymentSuccess} />
      </Routes>
    </MemoryRouter>
    </Provider>
  );
  });

  it("displays the correct page name in the header", () => {
    mockLocation(mockProps);
    const { getByText } = render(
      <Provider store={store}>
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
        <PaymentSuccess />
      </MemoryRouter>
      </Provider>
    );
    const headerElement = getByText("Checkout");
    expect(headerElement).toBeInTheDocument();
  });
  

  it('renders the payment body component with the correct props', () => {
    mockLocation(mockProps);
    const { getByText } = render(
      <Provider store={store}>
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
        <PaymentSuccess />
      </MemoryRouter>
      </Provider>
    );

    const paymentBodyElement = getByText(`${mockProps.totalBalance} BTC`);
    expect(paymentBodyElement).toBeInTheDocument();
  });
});
