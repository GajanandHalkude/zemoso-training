import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Purchase, { CurrencylocationState } from '.';
import { fetchAllCrtptoCurrenices, fetchWallet } from '../../../services/index';
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter, useLocation } from 'react-router-dom';
jest.mock('../../../services/index', () => ({
  fetchAllCrtptoCurrenices: jest.fn(() =>
    Promise.resolve([
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'btc',
        icon: 'bitcoin',
        price: 3285553.7365,
        marketCap: 61,
        totalSupply: 21000000,
        availableSupply: 19177900,
        priceChange: 1.06,
        volume: 52614783.23,
      },
    ])
  ),
  fetchWallet: jest.fn(() =>
    Promise.resolve({
      id: 'bitcoin',
      name: 'Bitcoin',
      balance: 1,
      avg_value: 16000,
      invested_amount: 16000,
    })
  ),
  addTransaction: jest.fn(),
}));


describe('Purchase', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockProps: CurrencylocationState  = {
    coindId: 'bitcoin'
  };

  it('fetches currency data and wallet data on component mount', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
        <Purchase />
      </MemoryRouter>
        );

    await waitFor(() => {
      expect(fetchAllCrtptoCurrenices).toHaveBeenCalledTimes(1);
      expect(fetchWallet).toHaveBeenCalledTimes(1);
    });
  });
  describe('Purchase', () => {
    it('renders Purchase component with quantity input', () => {
      const { getByTestId } = render(
        <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
        <Purchase />
      </MemoryRouter>
      );
      const quantityInput = getByTestId('quantity-input');
  
      expect(quantityInput).toBeInTheDocument();
    });
  });


describe('Purchase', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without error', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
      <Purchase />
    </MemoryRouter>
    );
  });

  it('fetches currency data and wallet information', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
        <Purchase />
      </MemoryRouter> 
    );
    
    expect(fetchAllCrtptoCurrenices).toHaveBeenCalledTimes(1);
    expect(fetchWallet).toHaveBeenCalledTimes(0);
  });
});
}
);
