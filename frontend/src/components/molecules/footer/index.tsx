import { Grid, styled, Stack, Box } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";
import ButtonComponent from "../../atoms/button";
import MuiTypography from "../../atoms/typography";
import Dropdown from "../../../../public/assets/images/Dropdown.svg";
import ImageComponent from "../../atoms/Image";
interface MenuItem {
  text: string;
  isBlack?: boolean;
}

interface FooterProps {
  menuItems: MenuItem[];
  buttonLabel?: string;
}

const MainContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px 24px 24px 24px",
  marginTop:'-20px',
  marginBottom:'-40px'
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


const Footer = ({ menuItems , buttonLabel}: FooterProps) => {
  
  return (
    <Box data-testid="footer">
      <MainContainer container>
        <Grid item xs={6}>
          <Stack direction="row" spacing={3}>
            {menuItems.map((item) =>
              item.isBlack ? (
                <StyledTypographyBlack
                  key={item.text}
                  variant="body2"
                  text={item.text}
                />
              ) : (
                <StyledTypographyBlue
                  key={item.text}
                  variant="body2"
                  text={item.text}
                />
              )
            )}
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
            <StyledButton variant="outlined" backgroundColor="none" text={buttonLabel} />
          </Stack>
        </RightContainer>
      </MainContainer>
    </Box>
  );
};

export default Footer;