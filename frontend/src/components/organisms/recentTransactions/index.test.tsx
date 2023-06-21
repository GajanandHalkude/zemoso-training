import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RecentTransactionsComponent from '.'

const reacentTransaction = [
  {
    "id": 1,
    "cryptoId": "bitcoin",
    "transactionDateTime": "2022-06-14",
    "quantity": "1",
    "symbol": "BTC",
    "transactionType": "sell",
    "price": 18707.31,
    "status": "success",
    "remarks": "Transaction success"
  },
  {
    "id": 2,
    "cryptoId": "bitcoin",
    "transactionDateTime": "2022-06-14",
    "quantity": "0.5",
    "symbol": "BTC",
    "transactionType": "buy",
    "price": 13000,
    "status": "success",
    "remarks": "Transaction success"
  }
]

it('should renders the recent transactions', () => {
  render(
    <RecentTransactionsComponent recentTransactions={reacentTransaction}/>
  )
  const ReactElement = screen.getByTestId('recentTransacions')
  expect(ReactElement).toBeInTheDocument()
})
describe('RecentTransactionsComponent', () => {

  it('should render "Recent Transactions" heading', () => {
    const { getByText } = render(
      <RecentTransactionsComponent recentTransactions={reacentTransaction} />
    );

    expect(getByText('Recent Transactions')).toBeInTheDocument();
  });

  it('should render "View All" caption', () => {
    const { getByText } = render(
      <RecentTransactionsComponent recentTransactions={reacentTransaction} />
    );

    expect(getByText('View All')).toBeInTheDocument();
  });

  it('should render empty state when recentTransactions is empty', () => {
    const { getByTestId } = render(
      <RecentTransactionsComponent recentTransactions={[]} />
    );

    const emptyImage = getByTestId('emptyTransacions');
    expect(emptyImage).toBeInTheDocument();
  });

  it('should render transactions when recentTransactions is not empty', () => {
    const { getByTestId } = render(
      <RecentTransactionsComponent recentTransactions={reacentTransaction} />
    );

    const transactions = getByTestId('recentTransacions');
    expect(transactions).toBeInTheDocument();
  });
});

describe('RecentTransactionsComponent', () => {
  it('renders success image when transaction status is "success"', () => {
    const recentTransactions = [
      {
        id: 1,
        cryptoId: 'BTC',
        transactionDateTime: '2023-06-01T09:30:00Z',
        quantity: '0.5',
        symbol: 'BTC',
        transactionType: 'buy',
        price: 50000,
        status: 'success',
        remarks: '',
      },
    ];
    const { getByTestId } = render(
      <RecentTransactionsComponent recentTransactions={recentTransactions} />
    );
    const transactionElement = getByTestId('transaction-0');
    console.log(transactionElement.innerHTML); 
    const successImage = transactionElement.querySelector('img[src*="t-success.svg"]');
    console.log(successImage); 
  });

  it('renders failed image when transaction status is not "success"', () => {
    const recentTransactions = [
      {
        id: 1,
        cryptoId: 'BTC',
        transactionDateTime: '2023-06-01T09:30:00Z',
        quantity: '0.7',
        symbol: 'BTC',
        price: 60000,
        transactionType: 'sell',
        status: 'failed',
        remarks: '',
      },
    ];
    const { getByTestId } = render(
      <RecentTransactionsComponent recentTransactions={recentTransactions} />
    );
    const transactionElement = getByTestId('transaction-0');
    console.log(transactionElement.innerHTML); 
    const failedImage = transactionElement.querySelector('img[src*="t-fail.svg"]');
    console.log(failedImage);
  });
});

