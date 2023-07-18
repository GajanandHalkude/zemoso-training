import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SideNavComponent from './index';

test('renders SideNavComponent without errors', () => {
  render(
      <BrowserRouter>
        <SideNavComponent />
      </BrowserRouter>
  );
});

test('renders list items', () => {
  render(
      <BrowserRouter>
        <SideNavComponent />
      </BrowserRouter>
  );

  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBe(5);
});