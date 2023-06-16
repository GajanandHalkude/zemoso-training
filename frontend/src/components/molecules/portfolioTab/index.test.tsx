import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PortfolioTab from '.';

const defaultProps = {
  icon: 'icon-url',
  cryptoCoinName: 'Bitcoin',
  shortNameOfCoin: 'BTC',
  value: 1000,
  totalPercentage: 10,
};

describe('PortfolioTab', () => {
  test('displays the crypto coin name and short name', () => {
    render(<PortfolioTab {...defaultProps} />);
    
    expect(screen.getByText(defaultProps.cryptoCoinName)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.shortNameOfCoin)).toBeInTheDocument();
  });

 test('displays the value and total percentage', () => {
  render(<PortfolioTab {...defaultProps} />);
  
  const formattedValue = `$ ${defaultProps.value}.00`;
  const formattedPercentage = new RegExp(`${defaultProps.totalPercentage}\\.%`);

  expect(screen.getByText(formattedValue)).toBeInTheDocument();
  expect(screen.getByText(formattedPercentage)).toBeInTheDocument();
});

});
