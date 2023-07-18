import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignUpPage from "./";
import { BrowserRouter } from "react-router-dom";



describe("SignUpPage", () => {
  test("renders SignUpTemplate component with correct props", () => {
    render(
    
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>
    
    );
  });
});
