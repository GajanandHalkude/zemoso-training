import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Purchase from '.';
import { fetchAllCrtptoCurrenices, fetchWallet } from '../../../services/index';
import '@testing-library/jest-dom/extend-expect'
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

  it('fetches currency data and wallet data on component mount', async () => {
    render(<Purchase />);

    await waitFor(() => {
      expect(fetchAllCrtptoCurrenices).toHaveBeenCalledTimes(1);
      expect(fetchWallet).toHaveBeenCalledTimes(1);
    });
  });
  describe('Purchase', () => {
    it('renders Purchase component with quantity input', () => {
      const { getByTestId } = render(<Purchase />);
      const quantityInput = getByTestId('quantity-input');
  
      expect(quantityInput).toBeInTheDocument();
    });
  });


describe('Purchase', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without error', async () => {
    render(<Purchase />);
  });

  it('fetches currency data and wallet information', async () => {
    render(<Purchase />);
    
    expect(fetchAllCrtptoCurrenices).toHaveBeenCalledTimes(1);
    expect(fetchWallet).toHaveBeenCalledTimes(0);
  });
});
}
);
