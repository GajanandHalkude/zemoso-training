import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageComponent from './index';
import holdingcard from "../../../../public/assets/images/holdingcard.svg"
import success from "../../../../public/assets/images/success.svg"
import '@testing-library/jest-dom/extend-expect';


describe('ImageComponent', () => {
  it('renders the image with the provided source', () => {
    const src = holdingcard;
    render(<ImageComponent src={src} />);
    
    const imageElement = screen.getByTestId('image');
    
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
  });

  it('sets the width and height attributes if provided', () => {
    const src = success;
    const width = '200';
    const height = '150';
    render(<ImageComponent src={src} width={width} height={height} />);
    
    const imageElement = screen.getByTestId('image');
    
    expect(imageElement).toHaveAttribute('width', width);
    expect(imageElement).toHaveAttribute('height', height);
  });
});
