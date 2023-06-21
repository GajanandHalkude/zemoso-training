import renderer from 'react-test-renderer';
import SummaryCard from './index';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';

const handleChange = jest.fn()
it('renders buy summary card correctly', () => {
    const tree = renderer
      .create(
        <SummaryCard type="buy" btcValue={0.023451} onClick={handleChange} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders sell summary card correctly', () => {
    const tree = renderer
      .create(
        <SummaryCard type="sell" btcValue={0.023451} onClick={handleChange} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
});

describe("Organisms/SummaryCard", () => {
  test("Renders sell card correctly", () => {
    render(
      <SummaryCard type="sell" btcValue={0.023451} onClick={handleChange} />
    );
    expect(screen.getByRole("heading")).toHaveTextContent("0.023451 BTC");
    expect(screen.getAllByRole("img")).toHaveLength(8);
    expect(screen.getByRole("button")).toHaveTextContent("SELL NOW");
  });

  test("Renders buy card correctly", () => {
    render(
      <SummaryCard type="buy" btcValue={0.023451} onClick={handleChange} />
    );
    expect(screen.getByRole("heading")).toHaveTextContent("0.023451 BTC");
    expect(screen.getAllByRole("img")).toHaveLength(8);
    expect(screen.getByRole("button")).toHaveTextContent("BUY NOW");
  });
});