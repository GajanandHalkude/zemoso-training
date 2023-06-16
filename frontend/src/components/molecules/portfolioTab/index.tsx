import { Box } from "@mui/material";
import React from "react";
import MuiTypography from "../../atoms/typography";
import IconComponent from "../../atoms/icon";
import theme from "../../../theme";
import styled from "@emotion/styled";

interface PortfolioProps {
  icon: string;
  cryptoCoinName: string;
  shortNameOfCoin: string;
  value: number;
  totalPercentage: number;
  width?: string;
  height?: string | number;
  size?: "small" | "medium";
  borderRadius?: string | number;
  variant?:any
  sx?:React.CSSProperties,
}

const StyledBox = styled(Box)({
  color: theme.palette.structural.main,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 12px 8px 24px",
  gap: "80px",
  width: "400px",
  height: "55px",
});

const Style1 = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

const Styled2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});


const PortfolioTab = ({
  value,
  totalPercentage,
  icon,
  cryptoCoinName,
  shortNameOfCoin,
}: PortfolioProps) => {
  return (
    <StyledBox data-testid="typography-component">
      <Style1>
        <IconComponent src={icon} />
        <Box>
          <MuiTypography
            variant="body1"
            text={cryptoCoinName}
            sx={{ color: theme.palette.textColor.highEmphasis }}
          />
          <MuiTypography
            variant="body2"
            text={shortNameOfCoin}
            sx={{ color: theme.palette.textColor.mediumEmphasis }}
          />
        </Box>
      </Style1>

      <Styled2 data-testid="typography-component">
          <MuiTypography
            variant="body1"
            text={`$${value}.00`}
            sx={{ color: theme.palette.textColor.highEmphasis }}
          />
          <MuiTypography alignItems={'flex-end'} justifyContent={'flex-end'}
            variant="body2"
            text={`${totalPercentage}.%`}
            sx={{ color: theme.palette.primary.success500 }}
          /> 
        </Styled2>
    
    </StyledBox>
  );
};
export default PortfolioTab;
