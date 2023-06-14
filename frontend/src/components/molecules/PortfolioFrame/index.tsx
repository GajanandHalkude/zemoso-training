import {  Grid } from '@mui/material'
import React from "react";
import theme from "../../../theme";
import IconWithTypography from "../../molecules/IconWithTypography";
import TypographyComponent from "../../atoms/typography";
import InfoIcon from "../../../../public/assets/icons/info.svg";

interface PortfolioFrameProps {
  mainText: string;
  subText: string;
}

const PortfolioFrame: React.FC<PortfolioFrameProps> = ({mainText,subText}) => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <TypographyComponent variant="body1" text={mainText} />
      </Grid>
      <Grid item xs={7} display="flex" justifyContent="end">
        <IconWithTypography
          image={InfoIcon}
          imageHeight={"20px"}
          imageWidth={"20px"}
          text={subText}
          iconandtextgap={"10px"}
          textVariant={"caption2"}
          textColor={theme.palette.textColor.highEmphasis}
        />
      </Grid>
    </Grid>
  );
};
export default PortfolioFrame;
