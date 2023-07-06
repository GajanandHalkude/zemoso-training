import {render, screen } from '@testing-library/react';
import SideNavComponent from '.';
import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

test('renders SideNavComponentLocation without errors', () => {
  render(<BrowserRouter><SideNavComponent /></BrowserRouter>);
});
test('renders list items', () => {
    render(<BrowserRouter><SideNavComponent /></BrowserRouter>);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(5);
});
test('list item buttons have the correct class', () => {
    render(<BrowserRouter><SideNavComponent /></BrowserRouter>);
    const listItemButtons = screen.getAllByRole('button');
    listItemButtons.forEach((button) => {
      expect(button).toHaveClass('list-item-button');
    });
  });

