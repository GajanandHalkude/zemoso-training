import { render, screen } from '@testing-library/react';
import SideNavComponentLocation from '.';
import React from 'react';
import '@testing-library/jest-dom';

test('renders SideNavComponentLocation without errors', () => {
  render(<SideNavComponentLocation />);
});
test('renders list items', () => {
    render(<SideNavComponentLocation />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(5);
});
test('list item buttons have the correct class', () => {
    render(<SideNavComponentLocation />);
    const listItemButtons = screen.getAllByRole('button');
    listItemButtons.forEach((button) => {
      expect(button).toHaveClass('list-item-button');
    });
});