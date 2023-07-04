import { Box } from "@mui/material";
import React from "react";
import MuiTypography from "../../atoms/typography";
import IconComponent from "../../atoms/icon";
import theme from "../../../theme";
import styled from "@emotion/styled";
import ChipItem from "../../atoms/chip"

interface PortfolioProps {
  currencyLogo: string;
  currencyName: string;
  userDescription: string;
  currency: React.ReactNode;
  marketCap: React.ReactNode;
  date: Date;
  chiplabel: string;
}

const StyledBox = styled(Box)({
  color: theme.palette.structural.main,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 24px",
  background: theme.palette.structural.main,
  
});

const CurrencyStyle = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  minWidth: "150px",
});
const ChipBox = styled(Box)({
    paddingTop: '23px',
  })
const LeftPart = styled(Box)({
  display:'flex',
  flexDirection:'row',
  gap:'10px',
  })
const RightPart = styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    justifyContent:'flex-end'
    })
const Divider = styled.hr`
    border: 1px solid ${theme.palette.grey[100]};
    order: 1;
  `;

const WalletTransactionTab = ({
  currencyLogo,
  currencyName,
  userDescription,
  currency,
  marketCap,
  date,
  chiplabel
}: PortfolioProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  const month = formattedDate.split(" ")[0];
  const day = formattedDate.split(" ")[1].replace(",", "");

  return (
    <Box data-testid="transaction-tab"> 
    <StyledBox>
      <LeftPart>
        <Box>
        <MuiTypography
              variant="caption2"
              text={month}
              color={theme.palette.textColor.mediumEmphasis}
            />
            <MuiTypography
              variant="subtitle2"
              text={day}
              color={theme.palette.textColor.highEmphasis}
            />

        </Box>
        <CurrencyStyle>
            <IconComponent src={currencyLogo} />
            <Box>
              <MuiTypography
                variant="body1"
                text={currencyName}
                sx={{ color: theme.palette.textColor.highEmphasis }}
              />
              <MuiTypography
                variant="caption2"
                text={userDescription}
                sx={{ color: theme.palette.textColor.mediumEmphasis }}
              />
            </Box>
        </CurrencyStyle>
        <ChipBox>
          <ChipItem label={chiplabel} chipType={"rounded"} chipVariant="light" />
        </ChipBox>
      </LeftPart>
      <RightPart>
        <MuiTypography
          variant="body1"
          text={`+${currency} BTC`}
          sx={{ color: theme.palette.textColor.highEmphasis}}
        />
        <MuiTypography
          variant="caption2"
          text={`+$${marketCap}`}
          sx={{ color: theme.palette.textColor.mediumEmphasis}}
        />
      </RightPart>
    </StyledBox>
    <Divider />
    </Box>
  );
};

export default WalletTransactionTab;