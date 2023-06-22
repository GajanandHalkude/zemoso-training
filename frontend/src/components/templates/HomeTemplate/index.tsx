import { Grid, Box, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";

interface HomeTemplateProps {
  header: React.ReactNode;
  sideNav: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
  paddingTop?: string;
}

const StyledChildren = styled(Grid)({
  paddingLeft: "24px",
  borderLeft: `1px solid ${theme.palette.greyColors.grey100}`,
  backgroundColor: theme.palette.greyColors.grey400,
});

const StyledHeader = styled(Grid)({
  height: "83px",
});

const RightContainer = styled(Grid)({
  paddingLeft: "80px",
});

const StyledSideNav = styled(Box)({
  borderRight: `1px solid ${theme.palette.greyColors.grey100}`,
});

const HomeTemplate: React.FC<HomeTemplateProps> = ({
  header,
  sideNav,
  footer,
  children,
  paddingTop,
}) => {
  return (
    <Box data-testid="home-template">
      <StyledSideNav>{sideNav}</StyledSideNav>
      <RightContainer container direction="column">
        <StyledHeader item>{header}</StyledHeader>
        <StyledChildren item paddingTop={paddingTop ? paddingTop : "0px"}>
          {children}
        </StyledChildren>
        {footer}
      </RightContainer>
    </Box>
  );
};

export default HomeTemplate;
