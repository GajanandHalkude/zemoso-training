import React from 'react';
import { render } from '@testing-library/react';
import TradePage from '.';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Provider } from "react-redux";
import store from "../../../services/store";

describe('TradePage', () => {
    it('renders without errors', () => {
        render(
          <Provider store={store}>
          <Router> 
            <TradePage />
          </Router>
          </Provider>
        );
      });
});