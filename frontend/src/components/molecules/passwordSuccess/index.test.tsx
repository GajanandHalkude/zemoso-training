import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PasswordSuccesful from '.';
import React from 'react';

describe('PasswordSuccesful', () => {
  const defaultProps = {
    icon: 'path/to/icon',
    heading: 'Password Reset successful',
    subtitle: 'Click on the button below to proceed login',
  };

  it('renders the PasswordSuccesful component', () => {
    render(<PasswordSuccesful  {...defaultProps} />);
    // Assert that the PasswordSuccesful component is rendered
    expect(screen.getByTestId('password-successful')).toBeInTheDocument();
  });

  it('displays the icon with the specified source', () => {
    render(<PasswordSuccesful {...defaultProps} />);
    // Assert that the icon component is rendered with the specified source
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultProps.icon);
  });

  it('displays the text1 and text2 with the correct content', () => {
    render(<PasswordSuccesful  {...defaultProps} />);
    // Assert that the text1 and text2 are displayed with the correct content
    expect(screen.getByText(defaultProps.heading)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
  });
});
