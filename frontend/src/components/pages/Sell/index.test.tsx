import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Sell, { CurrencylocationState } from '.';
import React from 'react';
import { waitFor } from '@testing-library/react';
import { fetchWallet } from '../../../services/index';

jest.mock('../../../services/index', () => ({
  fetchCurrencyData: jest.fn(() => Promise.resolve([{ name: 'Bitcoin' }])),
  fetchWallet: jest.fn(() => Promise.resolve({ balance: 100 })),
}));

describe('Sell component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockProps: CurrencylocationState  = {
    coindId: 'bitcoin'
  };

  it('renders without error', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
      <Sell />
    </MemoryRouter>
    );
  });

  it('fetches currency data and wallet data on component mount', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
      <Sell />
    </MemoryRouter>
    );

    await waitFor(() => {
      expect(fetchWallet).toHaveBeenCalledTimes(0);
    });
  });

  it('updates quantity state on input change', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: mockProps }]}>
      <Sell />
    </MemoryRouter>
    );
    const quantityInput = getByTestId('quantity-input') as HTMLInputElement;

    expect(quantityInput.value).toBe(undefined);
  });

});