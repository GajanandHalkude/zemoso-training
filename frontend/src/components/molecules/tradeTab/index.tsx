import { Box } from "@mui/material";
import React from "react";
import MuiTypography from "../../atoms/typography";
import IconComponent from "../../atoms/icon";
import theme from "../../../theme";
import styled from "@emotion/styled";
import ButtonComponent from "../../atoms/button";
import Filledstar from "../../../../public/assets/images/filled-star.svg";
import Emptystar from "../../../../public/assets/images/empty-star.svg";

interface PortfolioProps {
  icon: string;
  cryptoCoinName: string;
  shortNameOfCoin: string;
  change:string | number;
  price: string | number;
  marketCap: string | number;
  isStarFilled: boolean;
  handleStart?:React.MouseEventHandler<HTMLButtonElement>
}

const StyledBox = styled(Box)({
  color: theme.palette.structural.main,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 24px",
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
});

const StyledButtonComponent = styled(ButtonComponent)({
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const TradeTab = ({
  icon,
  cryptoCoinName,
  shortNameOfCoin,
  price,
  change,
  marketCap,
  isStarFilled,
  handleStart,
}: PortfolioProps) => {
  const isPositiveChange = Number(change) > 0;

  return (
    <StyledBox>
      <StyledCurrencyLogo>
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
        text={`$${price}.00`}
        sx={{ color: theme.palette.textColor.highEmphasis, minWidth: "150px" }}
      />
      <MuiTypography
        variant="body2"
        text={`${change}.%`}
        sx={{ color: isPositiveChange ? theme.palette.primary.success500 : theme.palette.loss.borderColor ,}}
      />
      <MuiTypography
        variant="body1"
        text={`$${marketCap}T`}
        sx={{ color: theme.palette.textColor.highEmphasis, minWidth: "150px" }}
      />
      <StyledButtonComponent
        onClick={handleStart}
        text={<IconComponent src={isStarFilled ? Filledstar : Emptystar} />}
      />
    </StyledBox>
  );
};

export default TradeTab;
