import { Box, styled } from "@mui/material";
import React from "react";
import ImageComponent from "../../atoms/Image";
import TypographyComponent from "../../atoms/typography";
import { TypographyProps } from "@mui/material/Typography";

interface IconWithTypographyProps extends TypographyProps {
  image: string;
  imageHeight: string;
  imageWidth: string;
  iconandtextgap?: string;
  text: string;
  textVariant: any;
  textColor: string | undefined;
  subText?: string | React.JSX.Element;
  subTextVariant?: any;
  subTextColor?: string;
  textHeight?: string;
  textWidth?: string;
  margin?: string;
  gapBetweenText?: string;
}

interface FlexRowBoxProps {
  iconandtextgap?: string;
  margin?: string;
}

const FlexRowBox = styled(Box)((props: FlexRowBoxProps) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  gap: props.iconandtextgap ? props.iconandtextgap : "10px",
  margin: props.margin ? props.margin : "0",
}));

const FlexColumnBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});

const IconWithTypography = ({
    image,
    text,
    textVariant,
    subText,
    subTextVariant,
    imageHeight,
    imageWidth,
    textColor,
    subTextColor,
    iconandtextgap,
    textWidth,
    textHeight,
    margin,
    gapBetweenText,
  }: IconWithTypographyProps) => {
    
  return (
    <React.Fragment>
      <FlexRowBox
        iconandtextgap={iconandtextgap}
        margin={margin}
        data-testid="iconWithTypography"
      >
        <ImageComponent src={image} width={imageWidth} height={imageHeight} />
        <FlexColumnBox gap={gapBetweenText ? gapBetweenText : "4px"}>
          <TypographyComponent
            variant={textVariant}
            style={{ color: textColor, width: textWidth, height: textHeight }}
            text={text}
          ></TypographyComponent>
          {subText && (
            <TypographyComponent
              variant={subTextVariant}
              style={{ color: subTextColor }}
              data-testid="iconWithTypography-subtext"
              text={subText}
            ></TypographyComponent>
          )}
        </FlexColumnBox>
      </FlexRowBox>
    </React.Fragment>
  );
};

export default IconWithTypography;

