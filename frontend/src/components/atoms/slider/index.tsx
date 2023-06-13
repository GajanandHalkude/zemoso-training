import styled from "@emotion/styled";
import { Slider, SliderProps } from "@mui/material";
import React from "react";
import theme from "../../../theme";

const StyledSlider = styled(Slider)({
    color: "#ABABB3",
    height: "88px",
    width: "1px",
    "& .MuiSlider-thumb": {
      width: "12px",
      height: "12px",
      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
      "&:hover, &.Mui-focusVisible": {
        boxShadow: "none",
      },
      "&.Mui-active": {
        width: 20,
        height: 20,
      },
    },
    "& .MuiSlider-rail": {
      opacity: 1,
    },
    "& .MuiSlider-markLabel": {
      color: theme.palette.textColor.mediumEmphasis,
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
    },
  });
  

export interface Props extends SliderProps {
    style:object,
    track:false | "normal" | "inverted" | undefined ,
}

const SliderComponent = (props: Props) => {
    return (
        <StyledSlider {...props} />
    );
  };
  
export default SliderComponent