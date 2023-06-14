import {  Grid } from '@mui/material'
import React from "react";
import theme from "../../../theme";
import IconWithTypography from "../../molecules/IconWithTypography";
import TypographyComponent from "../../atoms/typography";
import InfoIcon from "../../../../public/assets/icons/info.svg";


const PortfolioFrame: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <TypographyComponent variant="body1" text={"10 coins (3 active)"} />
      </Grid>
      <Grid item xs={7} display="flex" justifyContent="end">
        <IconWithTypography
          image={InfoIcon}
          imageHeight={"20px"}
          imageWidth={"20px"}
          text={"Click on the currency name below to display it on the graph"}
          iconandtextgap={"10px"}
          textVariant={"caption2"}
          textColor={theme.palette.textColor.highEmphasis}
        />
      </Grid>
    </Grid>
  );
};
export default PortfolioFrame;
