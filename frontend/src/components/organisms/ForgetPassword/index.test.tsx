import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForgetPassword from "./index";

describe("ForgetPassword", () => {
  it("renders the component with the provided label and button text", () => {
    const label = "Email:";
    const buttonText = "Send Reset Link";
    const isSendLink = true;
    render(
      <ForgetPassword
        label={label}
        buttonText={buttonText}
        isSendLink={isSendLink}
      />
    );
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it("disables the button when input value is invalid", () => {
    const label = "Email:";
    const buttonText = "Send Reset Link";
    const isSendLink = true;
    render(
      <ForgetPassword
        label={label}
        buttonText={buttonText}
        isSendLink={isSendLink}
      />
    );
    const inputElement = screen.getByPlaceholderText("abc@gmail.com");
    const buttonElement = screen.getByTestId("link-button");

    fireEvent.change(inputElement, { target: { value: "invalidemail" } });
    expect(buttonElement).toBeDisabled();
  });

  it("enables the button when input value is valid email", () => {
    const label = "Email:";
    const buttonText = "Send Reset Link";
    const isSendLink = true;
    render(
      <ForgetPassword
        label={label}
        buttonText={buttonText}
        isSendLink={isSendLink}
      />
    );
    const inputElement = screen.getByPlaceholderText("abc@gmail.com");
    const buttonElement = screen.getByTestId("link-button");
    fireEvent.change(inputElement, {
      target: { value: "validemail@example.com" },
    });
    expect(buttonElement).toBeEnabled();
  });

   it("enables the button when input value is valid code", () => {
     const label = "Reset Code";
     const buttonText = "Reset Password";
     const isSendLink = false;
     render(
       <ForgetPassword
         label={label}
         buttonText={buttonText}
         isSendLink={isSendLink}
       />
     );
     const inputElement = screen.getByPlaceholderText("8 digit code");
     const buttonElement = screen.getByTestId("link-button");
     fireEvent.change(inputElement, {
       target: { value: "87563257" },
     });
     expect(buttonElement).toBeEnabled();
   });
});
