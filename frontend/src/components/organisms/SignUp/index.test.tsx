import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import SignUp from "./";


describe("SignUp component", () => {
  it("updates full name on change", () => {
    render(<SignUp />);
    const fullNameInput = screen.getByPlaceholderText("Eg: Saiprabhu") as HTMLInputElement;

    fireEvent.change(fullNameInput, { target: { value: "" } });

    expect(fullNameInput.value).toBe("");
  });

  
  it("updates email on change", () => {
    render(<SignUp />);
    const emailInput = screen.getByPlaceholderText("saiprabhu.dandanayak@zemosolabs.com") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    expect(emailInput.value).toBe("john@example.com");
  });

  it("updates full name on change", () => {
    render(<SignUp />);
    const fullNameInput = screen.getByPlaceholderText("Eg: Saiprabhu") as HTMLInputElement;
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });

  });

  it("toggles password visibility", () => {
    render(<SignUp />);
    const passwordInput = screen.getByPlaceholderText("Password");  
    expect(passwordInput.getAttribute("type")).toBe("password");
  });

  test('renders the component correctly', () => {
    render(<SignUp/>);
  });

  test("should update the password state", () => {
    render(<SignUp />);
    const passwordInput = screen.getByPlaceholderText("Password") as HTMLInputElement;
    
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    
    expect(passwordInput.value).toBe("password123");
  });

  test("should toggle password visibility", () => {
    render(<SignUp />);
    const toggleButton = screen.getByTestId("password-toggle-button");
    const passwordInput = screen.getByPlaceholderText("Password") as HTMLInputElement;
  
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("password");
  });
  
});


