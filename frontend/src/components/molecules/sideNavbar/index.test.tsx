import { render, screen } from '@testing-library/react';
import SideNavComponent from '.';
import React from 'react';
import '@testing-library/jest-dom';

test('renders SideNavComponentLocation without errors', () => {
  render(<SideNavComponent />);
});
test('renders list items', () => {
    render(<SideNavComponent />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(5);
});
test('list item buttons have the correct class', () => {
    render(<SideNavComponent />);
    const listItemButtons = screen.getAllByRole('button');
    listItemButtons.forEach((button) => {
      expect(button).toHaveClass('list-item-button');
    });
});