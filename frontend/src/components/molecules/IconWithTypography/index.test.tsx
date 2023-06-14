import React from 'react'
import { render, screen } from '@testing-library/react'
import IconWithTypography from '.'
import '@testing-library/jest-dom'
import theme from '../../../theme'
import Image from "../../../../public/assets/images/bitcoin.svg";

it('should renders Icon With Typography having text and subtext', async () => {
  render(
    <IconWithTypography
      image={Image}
      imageHeight="42px"
      imageWidth="42px"
      text="Bitcoin"
      textVariant="body1"
      textColor={theme.palette.textColor.highEmphasis}
      subText="BTC"
      subTextVariant="overline"
      subTextColor={theme.palette.textColor.mediumEmphasis}
    />
  )
  let wrapper = screen.getByTestId('iconWithTypography')
  expect(wrapper).toBeInTheDocument()
  wrapper = screen.getByTestId('iconWithTypography-subtext')
  expect(wrapper).toBeInTheDocument()
})

it('should renders Icon With Typography having text only', async () => {
  render(
    <IconWithTypography
      image={Image}
      imageHeight="42px"
      imageWidth="42px"
      text="Bitcoin"
      textVariant="body1"
      textColor={theme.palette.textColor.highEmphasis}
      iconandtextgap="10px"
    />
  )
  const wrapper = screen.getByTestId('iconWithTypography')
  expect(wrapper).toBeInTheDocument()
})

it('should renders Icon With Typography when inconTypogrsphy gap is not passed', async () => {
  render(
    <IconWithTypography
      image={Image}
      imageHeight="42px"
      imageWidth="42px"
      text="Bitcoin"
      textVariant="body1"
      textColor={theme.palette.textColor.highEmphasis}
    />
  )
  const wrapper = screen.getByTestId('iconWithTypography')
  expect(wrapper).toHaveStyle('gap:10px')
  expect(wrapper).toBeInTheDocument()
})
it("renders the ImageComponent with the correct src, width, and height", () => {
    const image = "path/to/image.png";
    const imageHeight = "50px";
    const imageWidth = "50px";

    const { getByRole } = render(
      <IconWithTypography
        image={image}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
        text="Some text"
        textVariant="body1"
        textColor="#000"
      />
    );

    const imageElement = getByRole("img");

    expect(imageElement).toHaveAttribute("src", image);
    expect(imageElement).toHaveAttribute("width", imageWidth);
    expect(imageElement).toHaveAttribute("height", imageHeight);
  });

  it("renders the FlexColumnBox with the correct gap between text", () => {
    const gapBetweenText = "10px";
    const margin = "0";
    const { getByTestId } = render(
      <IconWithTypography
        image="path/to/image.png"
        imageHeight="50px"
        imageWidth="50px"
        text="Some text"
        textVariant="body1"
        textColor="#000"
        gapBetweenText={gapBetweenText}
        margin={margin}
      />
    );

    const flexColumnBox = getByTestId("iconWithTypography");
    expect(flexColumnBox).toHaveStyle(`gap: ${gapBetweenText}`);
    expect(flexColumnBox).toHaveStyle(`margin: ${margin}`);
  });





