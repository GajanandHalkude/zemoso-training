import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TradeFrame from '.';
import '@testing-library/jest-dom/extend-expect';
import {
  addWatchList,
  fetchAllCrtptoCurrenices,
  fetchWatchList,
  removeWatchList,
} from '../../../services';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../services/index', () => ({
  fetchAllCrtptoCurrenices: jest.fn(),
  fetchWatchList: jest.fn(),
  addWatchList: jest.fn(),
  removeWatchList: jest.fn(),
}));
describe('TradeFrame', () => {
  const currencyData = [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      priceChange: 0.05,
      price: 50000,
      marketCap: 1000000000,
      icon: 'bitcoin-icon',
    },
    {
      id: '2',
      name: 'Ethereum',
      symbol: 'ETH',
      priceChange: -0.1,
      price: 2000,
      marketCap: 500000000,
      icon: 'ethereum-icon',
    },
  ];

  const watchListData = [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      priceChange: 0.05,
      price: 50000,
      marketCap: 1000000000,
      icon: 'bitcoin-icon',
    },
  ];

  beforeEach(() => {
    (fetchAllCrtptoCurrenices as jest.Mock).mockResolvedValue(currencyData);
    (fetchWatchList as jest.Mock).mockResolvedValue(watchListData);
  });
  test('renders TradeFrame component', () => {
    render(<BrowserRouter><TradeFrame /></BrowserRouter>);
    expect(screen.getByTestId('trade-frame')).toBeInTheDocument();
  });
  test('updates search data when input value changes', () => {
    render(<BrowserRouter><TradeFrame /></BrowserRouter>);
    const searchInput = screen.getByPlaceholderText('Search all assets')  as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'bitcoin' } });
    expect(searchInput.value).toBe('bitcoin');
  });

  test('calls addWatchList function when star button is clicked', async () => {
    render(<BrowserRouter><TradeFrame /></BrowserRouter>);
    const starButton = screen.getAllByRole('button', { name: "icon" })[0];
    fireEvent.click(starButton);
  });
  test('Change descending order to ascending order in trade table', async () => {
    render(<BrowserRouter><TradeFrame /></BrowserRouter>);
    await waitFor(() => {
      const marketCapButton = screen.getByTestId('market-cap-button')
      fireEvent.click(marketCapButton)
    })
    render(<BrowserRouter><TradeFrame /></BrowserRouter>);
  })
  test('Select and unselect watch', async () => {
    await render(<BrowserRouter><TradeFrame /></BrowserRouter>);

    setTimeout(async () => {
      await waitFor(async () => {
        const watchListSelectedButton =
          screen.getAllByTestId('selected-watch')[0]
        fireEvent.click(watchListSelectedButton)
        await waitFor(() => {
          expect(addWatchList).toHaveBeenCalled();
        });
      })
    }, 2000)

    await render(<BrowserRouter><TradeFrame /></BrowserRouter>);

    setTimeout(async () => {
      await waitFor(async () => {
        const watchListSelectedButton =
          screen.getAllByTestId('unselected-watch')[0]
        fireEvent.click(watchListSelectedButton)
        await waitFor(() => {
          expect(removeWatchList).toHaveBeenCalled();
        });
      })
    }, 2000)
  });
 
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('calls addWatchList function when star button is clicked', async () => {
    (fetchWatchList as jest.Mock).mockResolvedValue(watchListData);
    render(<BrowserRouter><TradeFrame /></BrowserRouter>);

    await waitFor(() => {
      const watchListSelectedButton = screen.getAllByTestId('selected-watch')[0]
    fireEvent.click(watchListSelectedButton);
    });
  });
  
})






  