import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import WatchlistCard from './';
import bitcoin from "../../../../public/assets/images/bitcoin.svg"
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-apexcharts", () => ({
    __esModule: true,
    default: () => <div data-testid="graph-component" />,
  }));

describe('WatchlistCard', () => {
  const mockProps = {
    image:bitcoin,
    name: 'Bitcoin',
    price: 50000,
    change: 2.2,
    handleClick: jest.fn(),
    profit: true,
    width:'63%'
  };

  test('renders the component correctly', () => {
    render(<WatchlistCard {...mockProps} />);
  });

  test('renders the card with correct name and price', () => {
    render(<WatchlistCard {...mockProps} />);
    const nameElement = screen.getByText(mockProps.name);
    const priceElement = screen.getByText(`$${mockProps.price}`);
    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
  
  test('renders the chip item with correct label', () => {
    render(<WatchlistCard {...mockProps} />);
    const chipItem = screen.getByText('24 h');
    expect(chipItem).toBeInTheDocument();
  });

  test('calls handleClick when the card is clicked', () => {
    render(<WatchlistCard {...mockProps} />);
    const card = screen.getByTestId('watchlist-card');
    card.click();
    expect(mockProps.handleClick).toHaveBeenCalled();
  });

  test('renders the correct change percentage and trend icon', () => {
    render(<WatchlistCard {...mockProps} />);
    const trendIconElement = screen.getByText('Bitcoin');
    expect(trendIconElement).toBeInTheDocument();
  });

  test('renders the graph component with the correct options and series', () => {
    render(<WatchlistCard {...mockProps} />);
    const graphComponent = screen.getByTestId('graph-component');
    expect(graphComponent).toBeInTheDocument();

  });

  test('calls handleClick when the card is clicked', () => {
    render(<WatchlistCard {...mockProps} />);

    const card = screen.getByTestId('watchlist-card');
    card.click();

    expect(mockProps.handleClick).toHaveBeenCalledTimes(2);
  });

  test("should render the stock name and price", () => {
    render(<WatchlistCard {...mockProps} />);

    const stockName = screen.getByText("Bitcoin");
    const stockPrice = screen.getByText("$50000");

    expect(stockName).toBeInTheDocument();
    expect(stockPrice).toBeInTheDocument();
  });

  test("should render the stock image", () => {
    render(<WatchlistCard {...mockProps} />);

    const stockImage = screen.getByText("Bitcoin");

    expect(stockImage).toBeInTheDocument();
    
  });

  test("should call handleClick when the card is clicked", () => {
    render(<WatchlistCard {...mockProps} />);

    const card = screen.getByTestId("watchlist-card");

    card.click();

    expect(mockProps.handleClick).toHaveBeenCalledTimes(3);
  });

  it('should render correctly with provided props', () => {
    render(<WatchlistCard {...mockProps} />);
  
   
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('$50000')).toBeInTheDocument();
  });
    

  it('should handle click event correctly', () => {
    render(<WatchlistCard {...mockProps} />);
  
    fireEvent.click(screen.getByTestId('watchlist-card'));
    expect(mockProps.handleClick).toHaveBeenCalledTimes(4);
  });

  it('should render the graph component with the correct data and options', () => {
    render(<WatchlistCard {...mockProps} />);
  
    
  });

});

describe('WatchlistCard', () => {
  const mockProps = {
    image: 'image-url',
    name: 'Card Name',
    price: 100,
    handleClick: jest.fn(),
    profit: true,
    change: 2.2,
    width:'63%'
  };

  test('renders card with profit correctly', () => {
    render(<WatchlistCard {...mockProps} />);

    expect(screen.getByText('Card Name')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  test('renders card with loss correctly', () => {
    render(<WatchlistCard {...mockProps} profit={false} change={-1.5} />);

    expect(screen.getByText('Card Name')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
   
  });

  test('calls handleClick function on click', () => {
    render(<WatchlistCard {...mockProps} />);
    const card = screen.getByTestId('watchlist-card');
    card.click();
    expect(mockProps.handleClick).toHaveBeenCalledTimes(1);
  });
});
