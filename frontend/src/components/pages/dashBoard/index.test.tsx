/* eslint-disable @typescript-eslint/no-unused-vars */
import DashboardPage from '.'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { Provider } from "react-redux";
import store from "../../../services/store";

jest.mock('axios');

test('fetches the watchlist', async () => {
  const mockData = [{ id: 'BTC' }, { id: 'ETH' }];
  axios.get = jest.fn().mockResolvedValue({ data: mockData });

  let component:any;
  act(() => {
    component = render(
      <Provider store={store}>
    <BrowserRouter><DashboardPage /></BrowserRouter>
    </Provider>)
  });

});

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

const renderDashboard = () => {
  render(
    <Provider store={store}>
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
    </Provider>
  )
}

describe('Pages/DashboardPage', () => {
  test('Renders dashboard page correctly', () => {
    renderDashboard()

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(22)

    const homeTemplate = screen.getByTestId('home-template')
    expect(homeTemplate).toBeInTheDocument()
  })

  test('Renders watchlist cards correctly', async () => {
    const fakeWatchlist = [
      {
        image: 'assets/images/coins/bitcoin.svg',
        name: 'Bitcoin',
        symbol: 'BTC',
        change: +1.2
      }
    ]
    renderDashboard()

    const watchlist = screen.getByTestId('watchlist')
    expect(watchlist).toBeInTheDocument()
  })
  
})

