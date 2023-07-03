import React from 'react';
import { render, screen } from '@testing-library/react';
import MyPortfolioOrg from '.';
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components';

describe('MyPortfolioOrg', () => {
  it('has correct StyledGridHeader styling', () => {
    render(<MyPortfolioOrg />);
    const styledGridHeaderElement = screen.getByTestId('styled-grid-header');
    expect(styledGridHeaderElement).toHaveStyle('justify-content: space-between');
  });

  it('has correct StyledGrid styling', () => {
    render(<MyPortfolioOrg />);
    const styledGridElement = screen.getByTestId('styled-grid');
    expect(styledGridElement).toHaveStyle('overflow-y: scroll');
    expect(styledGridElement).toHaveStyle('padding-right: 0.6rem');
  });

});

