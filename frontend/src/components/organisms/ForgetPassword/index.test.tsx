import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForgetPassword from "./index";
import { BrowserRouter } from "react-router-dom";

describe("ForgetPassword", () => {
  it("renders the component with the provided label and button text", () => {
    const label = "Email:";
    const buttonText = "Send Reset Link";
    const isSendLink = true;
    render(
      <BrowserRouter>
      <ForgetPassword
        label={label}
        buttonText={buttonText}
        isSendLink={isSendLink} 
        handleSendResetLink={function (): void {
          throw new Error("Function not implemented.");
        } }      />
      </BrowserRouter>
    );
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it("disables the button when input value is invalid", () => {
    const label = "Email:";
    const buttonText = "Send Reset Link";
    const isSendLink = true;
    render(
      <BrowserRouter>
      <ForgetPassword
        label={label}
        buttonText={buttonText}
        isSendLink={isSendLink} 
        handleSendResetLink={function (): void {
          throw new Error("Function not implemented.");
        } }      />
      </BrowserRouter>
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
      <BrowserRouter>
      <ForgetPassword
        label={label}
        buttonText={buttonText}
        isSendLink={isSendLink} 
        handleSendResetLink={function (): void {
          throw new Error("Function not implemented.");
        } }      />
      </BrowserRouter>
    );
    const inputElement = screen.getByPlaceholderText("abc@gmail.com");
    const buttonElement = screen.getByTestId("link-button");
    fireEvent.change(inputElement, {
      target: { value: "validemail@example.com" },
    });
  });

   it("enables the button when input value is valid code", () => {
     const label = "Reset Code";
     const buttonText = "Reset Password";
     const isSendLink = false;
     render(
      <BrowserRouter>
       <ForgetPassword
         label={label}
         buttonText={buttonText}
         isSendLink={isSendLink} 
         handleSendResetLink={function (): void {
           throw new Error("Function not implemented.");
         } }       />
      </BrowserRouter>
     );
     const inputElement = screen.getByPlaceholderText("8 digit code");
     const buttonElement = screen.getByTestId("link-button");
     fireEvent.change(inputElement, {
       target: { value: "87563257" },
     });
     expect(buttonElement).toBeEnabled();
   });
});
