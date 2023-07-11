import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../services/store';
import SideNavComponent from './index';

test('renders SideNavComponent without errors', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SideNavComponent />
      </BrowserRouter>
    </Provider>
  );
});

test('renders list items', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SideNavComponent />
      </BrowserRouter>
    </Provider>
  );

  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBe(5);
});