import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ForgetPasswordpage from "./index";

describe("ForgetPassword", () => {

  it("should render the ForgetPasswordpage component with initial state", () => {
    const { getByTestId, getByText } = render(<ForgetPasswordpage />);
    expect(getByTestId("signin-card")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Send Reset Link")).toBeInTheDocument();
  });

  it("should update the state when send reset code is triggered", () => {
    const { getByText } = render(<ForgetPasswordpage />);
    const inputElement = screen.getByPlaceholderText("abc@gmail.com");
    screen.getByTestId("link-button");
    fireEvent.change(inputElement, {
      target: { value: "validemail@example.com" },
    });
    fireEvent.click(getByText("Send Reset Link"));
     setTimeout(() => {
       expect(getByText("Reset Code")).toBeInTheDocument();
       expect(getByText("Reset Password")).toBeInTheDocument();
       expect(getByText("Send Reset Link")).not.toBeInTheDocument();
       expect(getByText("Email")).not.toBeInTheDocument();
     }, 2000);
  });

  it("should handle verify code", () => {
   const { getByText } = render(<ForgetPasswordpage />);
   const inputElement = screen.getByPlaceholderText("abc@gmail.com");
   screen.getByTestId("link-button");
   fireEvent.change(inputElement, {
     target: { value: "validemail@example.com" },
   });
   fireEvent.click(getByText("Send Reset Link"));
     expect(getByText("Reset Code")).toBeInTheDocument();
     expect(getByText("Reset Password")).toBeInTheDocument();
  });

  it("should execute handleVerifyCode function", () => {
    const { getByText } = render(<ForgetPasswordpage />);
    const inputElement = screen.getByPlaceholderText("abc@gmail.com");
    screen.getByTestId("link-button");
    fireEvent.change(inputElement, {
     target: { value: "validemail@example.com" },
    });
    fireEvent.click(getByText("Send Reset Link"));
    expect(getByText("Reset Code")).toBeInTheDocument();
    expect(getByText("Reset Password")).toBeInTheDocument();
    const inputElement1 = screen.getByPlaceholderText("8 digit code");
    screen.getByTestId("link-button");
    fireEvent.change(inputElement1, {
      target: { value: "12345678" },
    });
    fireEvent.click(getByText("Reset Password"));
  });
  
  
});
