import React from 'react';
import { render } from '@testing-library/react';
import TradePage from '.';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 

describe('TradePage', () => {
    it('renders without errors', () => {
        render(

          <Router> 
            <TradePage />
          </Router>

        );
      });
});