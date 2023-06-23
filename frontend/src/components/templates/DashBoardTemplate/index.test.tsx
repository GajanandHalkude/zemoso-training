/* eslint-disable react/no-children-prop */
import renderer from 'react-test-renderer';
import DashBoardTemplate from "./index";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import Header from '../../molecules/Header';
import Footer from '../../molecules/footer';
import SideNavCompnent from '../../molecules/sideNavbar';
import { menuItems } from '../../../constants';
import React from 'react';

it('renders home template correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <DashBoardTemplate
            header={<Header pageName="Dashboard" displayButtons />}
            footer={<Footer menuItems={menuItems} buttonLabel="Need Help" />}
            children={
              <div style={{ height: "896px", width: "1296px" }}>content</div>
            }
            sideNav={<SideNavCompnent />}
            paddingTop="10px"
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
});

describe("Templates/DashBoard Template", () => {
  test("Renders home template correctly", () => {
    render(
      <BrowserRouter>
        <DashBoardTemplate
          header={<Header pageName="Dashboard" displayButtons />}
          footer={<Footer menuItems={menuItems} buttonLabel="Need Help" />}
          children={
            <div style={{ height: "896px", width: "1296px" }}>content</div>
          }
          sideNav={<SideNavCompnent />}
        />
      </BrowserRouter>
    );
    const template = screen.getByTestId("home-template");
    expect(template).toBeInTheDocument();
  });
});