import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInTemplate  from '.';
import ImageComponent from '../../../../public/assets/images/SignInImage.svg';
import SignInCard from '../../organisms/SignIn';
import '@testing-library/jest-dom/extend-expect';

describe('SignInTemplate', () => {
  const testImg = ImageComponent;
  const testBody = <div><SignInCard/></div>;

  test('renders SignInTemplate component with provided props', () => {
    render(
     
      <SignInTemplate img={testImg} body={testBody} />
    );

  
    const imageElement = screen.getByTestId('image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', testImg);
    expect(imageElement).toHaveAttribute('height', '660px');

    
  });

  

  test('renders SignInTemplate component with custom styles', () => {
    render(
      <SignInTemplate img={testImg} body={testBody}/>
    );

    
    const signInCardElement = screen.getByTestId('signin-card');
    expect(signInCardElement).toHaveStyle('display: flex');
    expect(signInCardElement).toHaveStyle('gap: 40px');
    expect(signInCardElement).toHaveStyle('align-items: center');
    expect(signInCardElement).toHaveStyle('justify-content: center');
  });

});
