import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import DetailsScrennBody from '.';

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div data-testid="graph-component" />,
}));

describe('DetailsScrennBody', () => {
  const coinBalance = 10;
  const currentValue = 100;

  it('should render the component correctly', () => {
    render(<DetailsScrennBody coinBalance={coinBalance} currentValue={currentValue} />);
    expect(screen.getByTestId('detailsScreen')).toBeInTheDocument();
    
  });
});


