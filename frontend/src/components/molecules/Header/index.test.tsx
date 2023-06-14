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

  
  
});
