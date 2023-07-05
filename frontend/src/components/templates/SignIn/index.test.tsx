import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInTemplate  from '.';
import ImageComponent from '../../../../public/assets/images/SignInImage.svg';
import SignInCard from '../../organisms/SignIn';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

describe('SignInTemplate', () => {
  const testImg = ImageComponent;
  const testBody = <div><SignInCard/></div>;

  test('renders SignInTemplate component with provided props', () => {
    render(
      <BrowserRouter>
      <SignInTemplate img={testImg} body={testBody} />
      </BrowserRouter>
    );

  
    const imageElement = screen.getByTestId('image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', testImg);

    
  });

  

  test('renders SignInTemplate component with custom styles', () => {
    render(
      <BrowserRouter>
        <SignInTemplate img={testImg} body={testBody}/>
      </BrowserRouter>
    );

    
    const signInCardElement = screen.getByTestId('signin-card');
    expect(signInCardElement).toHaveStyle('display: flex');
    expect(signInCardElement).toHaveStyle('align-items: center');
  });

});
