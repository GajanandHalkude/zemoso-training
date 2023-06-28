import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import SignInPage from "./";

describe("SignInPage", () => {
  test("renders SignInTemplate component with correct props", () => {
    render(<SignInPage />);
    
  });

  
});
