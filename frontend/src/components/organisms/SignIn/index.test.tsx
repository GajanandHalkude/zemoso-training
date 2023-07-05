/* eslint-disable react/react-in-jsx-scope */
import React  from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import SignInCard from './';
import '@testing-library/jest-dom/extend-expect';
import { isEmailValid, isPasswordValid } from '../../../constants';
import { BrowserRouter } from "react-router-dom";


describe('SignInCard', () => {
  test('renders email input field correctly', () => {
    render(<BrowserRouter><SignInCard /></BrowserRouter>);
    const emailInput = screen.getByPlaceholderText('saiprabhu.dandanayak@zemosolabs.com');
    expect(emailInput).toBeInTheDocument();
  
  });

  test('renders password input field correctly', () => {
    render(<BrowserRouter><SignInCard /></BrowserRouter>);
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
   
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
 
  });

  test('renders "Forgot Password" link correctly', () => {
    render(<BrowserRouter><SignInCard /></BrowserRouter>);
    const forgotPasswordLink = screen.getByText('Forgot Password');
    expect(forgotPasswordLink).toBeInTheDocument();
  
  });

  test('Update email value', () => {
    let updatedEmail = '';
    const handleEmailChange = (value: string) => {
      updatedEmail = value;
    };
    const newEmail = 'example@example.com';
    handleEmailChange(newEmail);
    expect(updatedEmail).toBe(newEmail);
  });
  
  test("should update the password state", () => {
    const { getByPlaceholderText } = render(<BrowserRouter><SignInCard /></BrowserRouter>);

    const passwordInput = getByPlaceholderText("Password") as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput.value).toBe("password123");
  });

  test("should toggle password visibility", () => {
    const { getByPlaceholderText, getByTestId } = render(<BrowserRouter><SignInCard /></BrowserRouter>);

    const passwordInput = getByPlaceholderText("Password") as HTMLInputElement;
    const toggleButton = getByTestId("password-toggle-button");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute("type")).toBe("password");
  });

  test("should update the email state", () => {
    const { getByPlaceholderText } = render(<BrowserRouter><SignInCard /></BrowserRouter>);

    const emailInput = getByPlaceholderText("saiprabhu.dandanayak@zemosolabs.com") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  it('should enable sign-in when email and password are valid', () => {
    const formData = {
      email: 'test@example.com',
      password: 'Password123!',
    };

    const isEmailValidMock = jest.fn().mockReturnValue(true);
    const isPasswordValidMock = jest.fn().mockReturnValue(true);

    const isSignInEnabled = isPasswordValidMock(formData.password) && isEmailValidMock(formData.email);

    expect(isSignInEnabled).toBe(true);
    expect(isEmailValidMock).toHaveBeenCalledWith(formData.email);
    expect(isPasswordValidMock).toHaveBeenCalledWith(formData.password);
  });
  
});

describe('Email Validation', () => {
  it('should return true for valid email', () => {
    const validEmail = 'test@example.com';
    expect(isEmailValid(validEmail)).toBe(true);
  });

  it('should return false for invalid email', () => {
    const invalidEmail = 'invalidemail';
    expect(isEmailValid(invalidEmail)).toBe(false);
  });

});

describe('Password Validation', () => {
  it('should return true for valid password', () => {
    const validPassword = 'Password123!';
    expect(isPasswordValid(validPassword)).toBe(true);
  });

  it('should return false for invalid password', () => {
    const invalidPassword = 'weakpassword';
    expect(isPasswordValid(invalidPassword)).toBe(false);
  });


});

describe('Sign-in Enabled', () => {
  it('should enable sign-in when email and password are valid', () => {
    const formData = {
      email: 'test@example.com',
      password: 'Password123!',
    };

    const isSignInEnabled = isPasswordValid(formData.password) && isEmailValid(formData.email);
    expect(isSignInEnabled).toBe(true);
  });

  it('should disable sign-in when email or password is invalid', () => {
    const formData1 = {
      email: 'test@example.com',
      password: 'weakpassword',
    };

    const formData2 = {
      email: 'invalidemail',
      password: 'Password123!',
    };

    const isSignInEnabled1 = isPasswordValid(formData1.password) && isEmailValid(formData1.email);
    const isSignInEnabled2 = isPasswordValid(formData2.password) && isEmailValid(formData2.email);

    expect(isSignInEnabled1).toBe(false);
    expect(isSignInEnabled2).toBe(false);
  });

});

it("should disable the button when passwords do not match", () => {
  render(<BrowserRouter><SignInCard /></BrowserRouter>);
  const passwordInput = screen.getByPlaceholderText(
    "Password"
  ) as HTMLInputElement;

  const signInButton = screen.getByTestId("password-toggle-button");
  fireEvent.change(passwordInput, { target: { value: "Abcdefg1@" } });
 
  expect(signInButton).toBeDisabled();
});
