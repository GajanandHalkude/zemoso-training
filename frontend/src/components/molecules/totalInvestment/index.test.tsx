import PortfolioValueComponent from '.';
import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';

it('should renders the Portfolio Value Typography with positive trend', async () => {
    render(
      <PortfolioValueComponent isInDashBoardPage={true} investmentValue={56795.9} typeOfInvestment='Total Investment' percentChange={9.0} width='185px'/>
    )
    const element = screen.getByTestId('PortfolioValueTypography')
    expect(element).toBeInTheDocument()
  })
  
  it('should renders the Portfolio Value Typography with negative trend', async () => {
      render(
        <PortfolioValueComponent isInDashBoardPage={true} investmentValue={56795.9} typeOfInvestment='Total Investment' percentChange={-9.0} width='185px'/>
      )
      const element = screen.getByTestId('PortfolioValueTypography')
      expect(element).toBeInTheDocument()
  })
  
  it('should renders the Portfolio Value Typography with positive trend in  details screen', async () => {
      render(
        <PortfolioValueComponent isInDashBoardPage={false} investmentValue={56795.9} typeOfInvestment='Total Investment' percentChange={-9.0} width='185px'/>
      )
      const element = screen.getByTestId('PortfolioValueTypography')
      expect(element).toBeInTheDocument()
  })
  
  it('should renders the Portfolio Value Typography with negative trend in  details screen', async () => {
      render(
        <PortfolioValueComponent isInDashBoardPage={false} investmentValue={56795.9} typeOfInvestment='Total Investment' percentChange={9.0} width='185px'/>
      )
      const element = screen.getByTestId('PortfolioValueTypography')
      expect(element).toBeInTheDocument()
  })
  
  