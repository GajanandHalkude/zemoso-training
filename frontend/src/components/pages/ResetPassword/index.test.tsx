import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResetPasswordpage from "./index";
import React from "react";

test("renders ResetPasswordpage component", () => {
  render(<ResetPasswordpage />);
  const resetPasswordComponent = screen.getByTestId("signin-card");
  expect(resetPasswordComponent).toBeInTheDocument();
});
