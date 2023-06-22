import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TradeFrame from '.';
import '@testing-library/jest-dom/extend-expect';
describe('TradeFrame', () => {
  const mockTradeFrameData = [
    {
      icon: 'icon1',
      coinName: 'Bitcoin',
      shortName: 'BTC',
      change: 0.05,
      price: 50000,
      marketcap: 1000000,
      star: true,
    },
    // Add more mock data objects here
  ];

  test('renders the trade frame component', () => {
    render(<TradeFrame />);
    const tradeFrameElement = screen.getByTestId('trade-frame');
    expect(tradeFrameElement).toBeInTheDocument();
  });

  test('displays filtered data in the All Assets tab', () => {
    render(<TradeFrame />);
    // Mock the filteredData prop
    jest.spyOn(React, 'useState').mockImplementationOnce(() => ['Bitcoin', jest.fn()]);
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [mockTradeFrameData, jest.fn()]);

    const bitcoinElement = screen.getByText('Bitcoin');
    expect(bitcoinElement).toBeInTheDocument();
  });

  test('updates search filter on input change', () => {
    render(<TradeFrame />);
    const searchInput = screen.getByPlaceholderText('Search all assets') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Bitcoin' } });

    expect(searchInput.value).toBe('Bitcoin');
  });

  // Add more test cases as needed
});

describe('TradeFrame', () => {
    test('renders TradeFrame component', () => {
      render(<TradeFrame />);
  
      // Assert that the TradeFrame component is rendered
      expect(screen.getByTestId('trade-frame')).toBeInTheDocument();
    });
  
    test('renders AllAssets component', () => {
      render(<TradeFrame />);
  
      // Assert that the AllAssets component is rendered
      expect(screen.getByTestId('assests')).toBeInTheDocument();
    });
  
    test('renders search input field', () => {
      render(<TradeFrame />);
  
      // Assert that the search input field is rendered
      expect(screen.getByPlaceholderText('Search all assets')).toBeInTheDocument();
    });
  });
  
  describe('TradeFrame search', () => {
    test('filters assets based on search input', () => {
      render(<TradeFrame />);
  
      // Get the search input field
      const searchInput = screen.getByPlaceholderText('Search all assets');
  
      // Type 'bitcoin' into the search input field
      fireEvent.change(searchInput, { target: { value: 'bitcoin' } });
  
      // Assert that the filtered assets are displayed
      expect(screen.getByText('Bitcoin')).toBeInTheDocument();
      expect(screen.queryByText('Ethereum')).not.toBeInTheDocument();
    });
  });
  