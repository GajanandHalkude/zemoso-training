import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInTemplate  from '.';
import Image from '../../../../public/assets/images/SignInImage.svg';
import SignInCard from '../../organisms/SignIn';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import ImageComponent from "../../atoms/Image";
import { Provider } from "react-redux";
import store from "../../../services/store";

describe('SignInTemplate', () => {
  const testImg = <ImageComponent src={Image} data-testid="image" />;
  const testBody = <div><SignInCard/></div>;

  test('renders SignInTemplate component with provided props', () => {
    render(
      <Provider store={store}>
      <BrowserRouter>
      <SignInTemplate img={testImg} body={testBody} />
      </BrowserRouter>
      </Provider>
    );
    const imageElement = screen.getByTestId('image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', Image);
  });

  test('renders SignInTemplate component with custom styles', () => {
    render(
      <Provider store={store}>
      <BrowserRouter>
        <SignInTemplate img={testImg} body={testBody}/>
      </BrowserRouter>
      </Provider>
    );
    const signInCardElement = screen.getByTestId('signin-card');
    expect(signInCardElement).toHaveStyle('display: flex');
    expect(signInCardElement).toHaveStyle('align-items: center');
  });

});
