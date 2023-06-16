/* eslint-disable @typescript-eslint/no-empty-function */
import renderer from 'react-test-renderer';
import Searchfield from '.';
import {render, screen, fireEvent }from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import SearchField from '.';

it('renders search bar correctly', () => {
    const tree = renderer
      .create(<Searchfield filter={false} placeholder={'Search all assets'} handleClick = {() => {}} handleChange={() => {}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders search bar with filter correctly', () => {
    const tree = renderer
      .create(<Searchfield filter={true} placeholder={'Search all assets'} handleClick = {() => {}} handleChange={() => {}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Molecules/Searchfield', () => {
  test('Renders search bar without filter', () => {
      render(<Searchfield filter={false} placeholder={'Search all assets'} handleClick = {() => {}} handleChange={() => {}}/>)
      const searchBar = screen.getByTestId('search-bar')
      expect(searchBar).toBeInTheDocument();
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
  })
  //test with searchbar with filter
  
  test('Renders search bar with filter', () => {
      render(<Searchfield filter={true} placeholder={'Search all assets'} handleClick = {() => {}} handleChange={() => {}}/>)
      const searchBar = screen.getByTestId('search-bar')
      expect(searchBar).toBeInTheDocument();
      const button = screen.getAllByRole('button');
      expect(button).toHaveLength(2);
  })

})