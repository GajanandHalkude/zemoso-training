import { Grid, styled, Stack, Box } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";
import ButtonComponent from "../../atoms/button";
import MuiTypography from "../../atoms/typography";
import Dropdown from "../../../../public/assets/images/Dropdown.svg";
import ImageComponent from "../../atoms/Image";

const StyledBox = styled(Box)({
  [theme.breakpoints.up("lg")]: {
    maxWidth: "1500px",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: "98vw",
  },
  [theme.breakpoints.down("lg")]: {
    minWidth: "1366px",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "97vw",
  },
  paddingLeft: "104px",
});

const MainContainer = styled(Grid)({
  height: "90px",
  borderTop: `1px solid ${theme.palette.greyColors.grey100}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: "22px",
});

const StyledTypographyBlue = styled(MuiTypography)({
  color: theme.palette.primary.primary500,
});

const StyledTypographyBlack = styled(MuiTypography)({
  color: theme.palette.textColor.highEmphasis,
});

const StyledButton = styled(ButtonComponent)({
  width: "120px",
  height: "40px",
  border: `1px solid ${theme.palette.primary.main}`,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: theme.palette.structural.main,
  },
});

const RightContainer = styled(Grid)({
  alignItems: "flex-end",
  margin: "0px",
 
});

const Footer = () => {
  return (
    <StyledBox data-testid="footer">
      <MainContainer container>
        <Grid item xs={6}>
          <Stack direction="row" spacing={3}>
            <StyledTypographyBlue variant="body2" text={"Dashboard"} />
            <StyledTypographyBlue variant="body2" text={"Careers"} />
            <StyledTypographyBlue variant="body2" text={"Legal & Privacy"} />
            <StyledTypographyBlack variant="body2" text={"© 2021 Minet"} />
          </Stack>
        </Grid>
        <RightContainer item xs={6} justifyContent="flex-end">
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <ImageComponent src={Dropdown} width="150px" height="150px" />
            <StyledButton variant="outlined" backgroundColor={"none"}>
              NEED HELP
            </StyledButton>
          </Stack>
        </RightContainer>
      </MainContainer>
    </StyledBox>
  );
};

export default Footer;
