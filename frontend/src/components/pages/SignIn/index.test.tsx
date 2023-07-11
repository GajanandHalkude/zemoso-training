import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import store from "../../../services/store";

import SignInPage from "./";
import { BrowserRouter } from "react-router-dom";

describe("SignInPage", () => {
  test("renders SignInTemplate component with correct props", () => {
    render(
      <Provider store={store}>
    <BrowserRouter><SignInPage /></BrowserRouter>
    </Provider>);
  });
});
