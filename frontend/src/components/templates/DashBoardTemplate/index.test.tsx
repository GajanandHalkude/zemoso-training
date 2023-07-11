import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../../molecules/Header';
import Footer from '../../molecules/footer';
import SideNavCompnent from '../../molecules/sideNavbar';
import { menuItems } from '../../../constants';
import DashBoardTemplate from './index';
import React from 'react';

const mockStore = configureStore([]);

it('renders home template correctly', () => {
  const store = mockStore({});

  const { container } = render(
    <Provider store={store}>
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
    </Provider>
  );

  expect(container).toMatchSnapshot();
});

describe('Templates/DashBoard Template', () => {
  test('Renders home template correctly', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
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
      </Provider>
    );
  });
});
