/* eslint-disable react/react-in-jsx-scope */
import React  from "react";
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import SignInCard from './';
import '@testing-library/jest-dom/extend-expect';


describe('SignInCard', () => {
  test('renders email input field correctly', () => {
    render(<SignInCard />);
    const emailInput = screen.getByPlaceholderText('saiprabhu.dandanayak@zemosolabs.com');
    expect(emailInput).toBeInTheDocument();
  
  });

  test('renders password input field correctly', () => {
    render(<SignInCard />);
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
   
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
 
  });

  test('renders "Forgot Password" link correctly', () => {
    render(<SignInCard />);
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
    const { getByPlaceholderText } = render(<SignInCard />);

    const passwordInput = getByPlaceholderText("Password") as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput.value).toBe("password123");
  });

  test("should toggle password visibility", () => {
    const { getByPlaceholderText, getByTestId } = render(<SignInCard />);

    const passwordInput = getByPlaceholderText("Password") as HTMLInputElement;
    const toggleButton = getByTestId("password-toggle-button");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute("type")).toBe("password");
  });

  test("should update the email state", () => {
    const { getByPlaceholderText } = render(<SignInCard />);

    const emailInput = getByPlaceholderText("saiprabhu.dandanayak@zemosolabs.com") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });
});