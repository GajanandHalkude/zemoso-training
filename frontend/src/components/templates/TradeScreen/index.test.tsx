import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import TradeScreenTemplate from './index';

test("TradeScreenTemplate renders with all props", () => {
  const header = <div>Header</div>;
  const sideNav = <div>SideNav</div>;
  const footer = <div>Footer</div>;
  const paddingTop = "20px";

  render(
    <TradeScreenTemplate
      header={header}
      sideNav={sideNav}
      footer={footer}
      paddingTop={paddingTop}
    >
      <div>Children</div>
    </TradeScreenTemplate>
  );
});

test("TradeScreenTemplate renders without paddingTop prop", () => {
  const header = <div>Header</div>;
  const sideNav = <div>SideNav</div>;
  const footer = <div>Footer</div>;

  render(
    <TradeScreenTemplate
      header={header}
      sideNav={sideNav}
      footer={footer}
    >
      <div>Children</div>
    </TradeScreenTemplate>
  );
});

test("TradeScreenTemplate renders with empty header", () => {
  const header = null;
  const sideNav = <div>SideNav</div>;
  const footer = <div>Footer</div>;

  render(
    <TradeScreenTemplate
      header={header}
      sideNav={sideNav}
      footer={footer}
    >
      <div>Children</div>
    </TradeScreenTemplate>
  );
});

test("TradeScreenTemplate renders with empty sideNav", () => {
  const header = <div>Header</div>;
  const sideNav = null;
  const footer = <div>Footer</div>;

  render(
    <TradeScreenTemplate
      header={header}
      sideNav={sideNav}
      footer={footer}
    >
      <div>Children</div>
    </TradeScreenTemplate>
  );

});
