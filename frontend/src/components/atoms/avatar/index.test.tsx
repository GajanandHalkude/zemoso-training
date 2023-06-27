
import React from 'react'
import { render } from '@testing-library/react'
import AvatarComponent from './index'
import '@testing-library/jest-dom/extend-expect'
import Logo from  "../../../../public/assets/images/avatar.svg"

describe('AvatarComponent', () => {
  it('renders the Avatar with the provided props', () => {
    const props = {
      height: '100px',
      width: '100px',
      src:Logo
    };

    const { getByTestId } = render(<AvatarComponent {...props} />);
    const avatar = getByTestId('avatar');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveStyle('width: 100px');
    expect(avatar).toHaveStyle('height: 100px');
  });

  it('renders the Avatar with updated props', () => {
    const props = {
      height: '50px',
      width: '50px',
      src:Logo
    };

    const { getByTestId } = render(<AvatarComponent {...props} />);
    const avatar = getByTestId('avatar');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveStyle('width: 50px');
    expect(avatar).toHaveStyle('height: 50px');
  });
});

export {}
