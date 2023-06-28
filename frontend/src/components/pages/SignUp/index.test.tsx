import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import SignUpPage from "./";

describe("SignUpPage", () => {
  test("renders SignUpTemplate component with correct props", () => {
    render(<SignUpPage />);
  });
});
