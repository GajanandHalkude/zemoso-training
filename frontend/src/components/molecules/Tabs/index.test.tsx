import { render, screen, fireEvent } from '@testing-library/react';
import TabsComponent from './';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('TabsComponent', () => {
  test('renders the first tab with the correct label', () => {
    const label1 = 'Label 1';
  
    render(<TabsComponent label1={label1} label2="Label 2" />);
  
    const tab1 = screen.getByRole('tab', { name: label1 });
  
    expect(tab1).toBeInTheDocument();
  });
  test('renders the second tab with the correct label', () => {
    const label2 = 'Label 2';
  
    render(<TabsComponent label1="Label 1" label2={label2} />);
  
    const tab2 = screen.getByRole('tab', { name: label2 });
  
    expect(tab2).toBeInTheDocument();
  });
  
});
