import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../molecules/Header';
import Footer from '../../molecules/footer';
import SideNavCompnent from '../../molecules/sideNavbar';
import { menuItems } from '../../../constants';
import DashBoardTemplate from './index';
import React from 'react';

it('renders home template correctly', () => {
 
  const { container } = render(
   
      <BrowserRouter>
        <DashBoardTemplate
          header={<Header pageName="Dashboard" displayButtons />}
          footer={<Footer menuItems={menuItems} buttonLabel="Need Help" />}
          sideNav={<SideNavCompnent />}
        >
          <div style={{ height: '896px', width: '1296px' }} data-testid="home-template">
            content
          </div>
        </DashBoardTemplate>
      </BrowserRouter>
  
  );

  expect(container).toMatchSnapshot();
});

describe('Templates/DashBoard Template', () => {
  test('Renders home template correctly', () => {

    render(
   
        <BrowserRouter>
          <DashBoardTemplate
            header={<Header pageName="Dashboard" displayButtons />}
            footer={<Footer menuItems={menuItems} buttonLabel="Need Help" />}
            sideNav={<SideNavCompnent />}
          >
            <div style={{ height: '896px', width: '1296px' }} data-testid="home-template">
              content
            </div>
          </DashBoardTemplate>
        </BrowserRouter>
   
    );
  });
});
