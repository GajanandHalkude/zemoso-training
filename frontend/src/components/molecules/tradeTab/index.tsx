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
  change:string | number;
  price: string | number;
  marketCap: string | number;
  button?:React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const StyledBox = styled(Box)({
  color: theme.palette.structural.main,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 18px",
  background: theme.palette.structural.main,
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: "4px",
  maxWidth: "1239x",
});

const StyledCurrencyLogo = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  gap: "10px",
  minWidth: "150px",
  cursor:'pointer'
});


const TradeTab = ({
  icon,
  cryptoCoinName,
  shortNameOfCoin,
  price,
  change,
  marketCap,
  button,
  onClick
}: PortfolioProps) => {
  const isPositiveChange = Number(change) > 0;

  return (
    <StyledBox>
      <StyledCurrencyLogo onClick={onClick}>
        <IconComponent src={icon} />
        <Box>
          <MuiTypography
            variant="body1"
            text={cryptoCoinName}
            sx={{ color: theme.palette.textColor.highEmphasis }}
          />
          <MuiTypography
            variant="overline"
            text={shortNameOfCoin}
            sx={{ color: theme.palette.textColor.mediumEmphasis }}
          />
        </Box>
      </StyledCurrencyLogo>
      <MuiTypography
        variant="body2"
        text={`$${price?.toLocaleString('en-US', {maximumFractionDigits:2})}`}
        sx={{ color: theme.palette.textColor.highEmphasis, minWidth: "130px" }}
      />
      <MuiTypography
        variant="body2"
        text={isPositiveChange ? `+${change}%` : `${change}%`}
        sx={{ color: isPositiveChange ? theme.palette.primary.success500 : theme.palette.loss.borderColor }}
        data-testid="change-text"
      />
      <MuiTypography
        variant="body1"
        text={`$${marketCap}T`}
        sx={{ color: theme.palette.textColor.highEmphasis, minWidth: "120px" }}
      />
      {button}
    </StyledBox>
  );
};

export default TradeTab;
