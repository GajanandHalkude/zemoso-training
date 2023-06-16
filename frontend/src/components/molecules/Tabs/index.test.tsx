import { render, screen, fireEvent } from '@testing-library/react';
import TabsComponent from './';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('TabsComponent', () => {
  test('renders the tabs with correct labels', () => {
    const label1 = 'Label 1';
    const label2 = 'Label 2';

    render(<TabsComponent label1={label1} label2={label2} />);

    const tab1 = screen.getByRole('tab', { name: label1 });
    const tab2 = screen.getByRole('tab', { name: label2 });

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
  });

  
  test('renders the default tab panel content', () => {
    const label1 = 'Label 1';
    const defaultContent = 'hello';

    render(<TabsComponent label1={label1} label2="Label 2" />);

    const defaultTabPanel = screen.getByText(defaultContent);

    expect(defaultTabPanel).toBeInTheDocument();
  });

  test('renders the correct tab panel content on tab change', () => {
    const label1 = 'Label 1';
    const label2 = 'Label 2';
    const content1 = 'hello';
    const content2 = 'welcome';

    render(<TabsComponent label1={label1} label2={label2} />);

    const tab1 = screen.getByRole('tab', { name: label1 });
    const tab2 = screen.getByRole('tab', { name: label2 });

    fireEvent.click(tab2);

    const tabPanel2 = screen.getByText(content2);

    expect(tabPanel2).toBeInTheDocument();

    fireEvent.click(tab1);

    const tabPanel1 = screen.getByText(content1);

    expect(tabPanel1).toBeInTheDocument();
  });
});
