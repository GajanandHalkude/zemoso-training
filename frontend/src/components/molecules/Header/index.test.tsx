import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  test('renders the page name correctly', () => {
    const pageName = 'Home';

    render(
      <MemoryRouter>
        <Header pageName={pageName} />
      </MemoryRouter>
    );

    const pageNameElement = screen.getByText(pageName);
    expect(pageNameElement).toBeInTheDocument();
  });

  test('renders the SELL button with correct text and link', () => {
    render(
      <MemoryRouter>
        <Header pageName="Home" />
      </MemoryRouter>
    );

    const sellButton = screen.getByText('SELL');
    expect(sellButton).toBeInTheDocument();
    expect(sellButton.getAttribute('href')).toBe(null);
  });

  test('renders the BUY button with correct text and link', () => {
    render(
      <MemoryRouter>
        <Header pageName="Home" />
      </MemoryRouter>
    );

    const buyButton = screen.getByText('BUY');
    expect(buyButton).toBeInTheDocument();
    expect(buyButton.getAttribute('href')).toBe(null);
  });

  
});
