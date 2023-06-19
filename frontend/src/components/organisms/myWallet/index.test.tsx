import { render, screen } from '@testing-library/react';
import PaymentAndDetailsCard from '.';
import React from 'react';
import "@testing-library/jest-dom/extend-expect";

describe('PaymentAndDetailsCard', () => {
  test('renders payment variant with correct title and balance', () => {
    const props = {
      variant: 'payment' as const,
      title: 'Payment Card',
      icon: "payment-icon.png",
      coinType: 'Bitcoin',
      balance: 1000,
      coinSymbol: 'BTC',
      wallet: true,
      walletName: 'My Wallet',
    };

    render(<PaymentAndDetailsCard {...props} />);

    const titleElement = screen.getByText('Payment Card');
    const coinTypeElement = screen.getByText('Bitcoin');
    const balanceElement = screen.getByText('Total balance: $1000');

    expect(titleElement).toBeInTheDocument();
    expect(coinTypeElement).toBeInTheDocument();
    expect(balanceElement).toBeInTheDocument();
  });
  test('renders balance variant with correct title and balance', () => {
    const props = {
      variant: 'balance' as const,
      title: 'Balance Card',
      icon:"balance-icon.png",
      coinType: 'Litecoin',
      balance: 500,
      coinSymbol: 'LTC',
      wallet: true,
      walletName: 'My Wallet',
    };

    render(<PaymentAndDetailsCard {...props} />);

    const titleElement = screen.getByText('Balance Card');
    const coinTypeElement = screen.getByText('Litecoin');
    const balanceElement = screen.getByText('500 LTC');

    expect(titleElement).toBeInTheDocument();
    expect(coinTypeElement).toBeInTheDocument();
    expect(balanceElement).toBeInTheDocument();
  });
  test('renders non-wallet variant with correct title and balance', () => {
    const props = {
      variant: 'payment' as const,
      title: 'Payment Card',
      icon:"payment-icon.png",
      coinType: 'Bitcoin',
      balance: 1000,
      coinSymbol: 'BTC',
      wallet: false,
      walletName: 'My Wallet',
    };

    render(<PaymentAndDetailsCard {...props} />);

    const titleElement = screen.getByText('Payment Card');
    const coinTypeElement = screen.getByText('Bitcoin');
    const balanceElement = screen.getByText('$1000');

    expect(titleElement).toBeInTheDocument();
    expect(coinTypeElement).toBeInTheDocument();
    expect(balanceElement).toBeInTheDocument();
  });
});
