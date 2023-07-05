import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResetPasswordpage from "./index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

test("renders ResetPasswordpage component", () => {
  render(<BrowserRouter><ResetPasswordpage /></BrowserRouter>);
  const resetPasswordComponent = screen.getByTestId("signin-card");
  expect(resetPasswordComponent).toBeInTheDocument();
});
