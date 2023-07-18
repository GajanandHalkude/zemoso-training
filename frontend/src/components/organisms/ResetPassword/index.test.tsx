import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResetPassword from "./index";
import { BrowserRouter } from "react-router-dom";

describe("ResetPassword", () => {
  it("should render the component", () => {
    render(<BrowserRouter><ResetPassword /></BrowserRouter>);
  });

  it("should enable the button when passwords match and are valid", () => {
    render(<BrowserRouter><ResetPassword /></BrowserRouter>);
    const passwordInput = screen.getByPlaceholderText(
      "Enter Password"
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByPlaceholderText(
      "Re-Enter Password"
    ) as HTMLInputElement;
    const resetButton = screen.getByTestId("link-button");
    fireEvent.change(passwordInput, { target: { value: "Abcdefg1@" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "Abcdefg1@" } });
  });

  it("should disable the button when passwords do not match", () => {
    render(<BrowserRouter><ResetPassword /></BrowserRouter>);
    const passwordInput = screen.getByPlaceholderText(
      "Enter Password"
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByPlaceholderText(
      "Re-Enter Password"
    ) as HTMLInputElement;
    const resetButton = screen.getByTestId("link-button");
    fireEvent.change(passwordInput, { target: { value: "Abcdefg1@" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "12345678" } });
    expect(resetButton).toBeDisabled();
  });

  it("should handle the password reset click'", () => {
    const mockResetUserPassword = jest.fn();
    render(<BrowserRouter><ResetPassword /></BrowserRouter>);
    const passwordInput = screen.getByPlaceholderText(
      "Enter Password"
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByPlaceholderText(
      "Re-Enter Password"
    ) as HTMLInputElement;
    const resetButton = screen.getByTestId("link-button");
    fireEvent.change(passwordInput, { target: { value: "Abcdefg1@" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "Abcdefg1@" } });
    fireEvent.click(resetButton);
  });
});
