import React from "react";
import MuiTypography from "../../atoms/typography";
import { Box, styled } from "@mui/material";
import { currencyBannerContent, currencyBannerData } from "../../../constants";
import IconWithTypography from "../IconWithTypography";
import File from "../../../../public/assets/images/file.svg";
import Globe from "../../../../public/assets/images/globe.svg";
import PortfolioTab from "../portfolioTab";
import theme from "../../../theme";

interface CurrencyDetailsBannerProps {
  aboutCurrency: string;
  details?: string;
}

const StyledBox = styled(Box)({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px 0px 16px 2px",
  gap: "16px",
  //   width: '397px',
  //   height: '312px',
  background: theme.palette.structural.main,
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: "4px",
});

const StyledBoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  gap: "30px",
});

const StyledBoxCorrelation = styled(Box)({
  flexWrap: "wrap",
  color: theme.palette.textColor.highEmphasis,
});

const StyledBoxResource = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
const StyledBoxResourceContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const CurrencyDetailsBanner = ({
  aboutCurrency
}: CurrencyDetailsBannerProps) => {
  return (
    <StyledBoxContainer data-testid="portfolio-tab" flexDirection={"row"}>
      <StyledBoxResourceContainer>
        <StyledBoxResource>
          <MuiTypography text={aboutCurrency} />
          <MuiTypography text={currencyBannerContent} />
        </StyledBoxResource>
        <StyledBoxResource >
          <MuiTypography text={"Resourses"} />
          <IconWithTypography
            image={Globe}
            imageHeight={""}
            imageWidth={""}
            text={"Official Website"}
            textVariant={undefined}
            textColor={theme.palette.graphColor.borderColor2}
          />
          <IconWithTypography
            image={File}
            imageHeight={""}
            imageWidth={""}
            text={"White Paper"}
            textVariant={undefined}
            textColor={theme.palette.graphColor.borderColor2}
          />
        </StyledBoxResource>
      </StyledBoxResourceContainer>

      <StyledBox>
        <StyledBoxCorrelation >
          <MuiTypography text={"Price correlation with"} />
        </StyledBoxCorrelation>
        <Box>
          {currencyBannerData.map((data) => (
            <Box key={data.icon}>
              <PortfolioTab
                icon={data.icon}
                cryptoCoinName={data.coinName}
                shortNameOfCoin={data.shortName}
                value={data.value}
                totalPercentage={data.percentage}
              />
            </Box>
          ))}
        </Box>
      </StyledBox>
    </StyledBoxContainer>
  );
};
export default CurrencyDetailsBanner;
