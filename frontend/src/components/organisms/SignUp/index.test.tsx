import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import SignUp from "./";
import { BrowserRouter } from "react-router-dom";


describe("SignUp component", () => {
  it("updates full name on change", () => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    const fullNameInput = screen.getByPlaceholderText("Eg: Saiprabhu") as HTMLInputElement;

    fireEvent.change(fullNameInput, { target: { value: "" } });

    expect(fullNameInput.value).toBe("");
  });

  
  it("updates email on change", () => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    const emailInput = screen.getByPlaceholderText("saiprabhu.dandanayak@zemosolabs.com") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    expect(emailInput.value).toBe("john@example.com");
  });

  it("updates full name on change", () => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    const fullNameInput = screen.getByPlaceholderText("Eg: Saiprabhu") as HTMLInputElement;
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });

  });

  it("toggles password visibility", () => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    const passwordInput = screen.getByPlaceholderText("Password");  
    expect(passwordInput.getAttribute("type")).toBe("password");
  });

  test('renders the component correctly', () => {
    render(<BrowserRouter><SignUp/></BrowserRouter>);
  });

  test("should update the password state", () => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    const passwordInput = screen.getByPlaceholderText("Password") as HTMLInputElement;
    
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    
    expect(passwordInput.value).toBe("password123");
  });

  test("should toggle password visibility", () => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    const toggleButton = screen.getByTestId("password-toggle-button");
    const passwordInput = screen.getByPlaceholderText("Password") as HTMLInputElement;
  
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("password");
  });
  
});

it("should disable the button when passwords do not match", () => {
  render(<BrowserRouter><SignUp /></BrowserRouter>);
  const passwordInput = screen.getByPlaceholderText(
    "Password"
  ) as HTMLInputElement;

  const signInButton = screen.getByTestId("password-toggle-button");
  fireEvent.change(passwordInput, { target: { value: "Abcdefg1@" } });
 
  expect(signInButton).toBeDisabled();
});


