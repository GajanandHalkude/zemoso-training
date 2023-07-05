import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import SignInPage from "./";
import { BrowserRouter } from "react-router-dom";

describe("SignInPage", () => {
  test("renders SignInTemplate component with correct props", () => {
    render(<BrowserRouter><SignInPage /></BrowserRouter>);
    
  });

  
});
