import { styled, Box, Grid, Stack } from "@mui/material";
import React from 'react'
import TypographyComponent from '../../atoms/typography'
import { dollarValue, formatCurrency } from '../../../constants'
import theme from '../../../theme'
import IconComponent from '../../atoms/icon'
import dottedLine from "../../../../public/assets/icons/orderSummary.svg";
import ButtonComponent from '../../atoms/button'
import PaymentSummaryStepper from "../../molecules/PaymentSummaryStepper";


interface SummaryCardProps {
  type: "buy" | "sell";
  btcValue: number;
  price?: number;
  onClick: (arg: any) => void;
  amount?: number;
}
const StyledBox = styled(Box)({
  width: "527px",
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: "4px",
  background: theme.palette.structural.main,
});

const TypographyGrid = styled(Grid)({
  paddingTop: "28px",
  paddingBottom: "32px",
  alignItems: "center",
  justifyContent: "center",
  margin: "0px",
  width: "100%",
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
});

const StepperBox = styled(Box)({
  padding: "24px 0 24px 24px",
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
});

const TotalBox = styled(Stack)({
  padding: "24px 0 70px 24px",
});

const renderOrderSummary = (
  leftValue: string,
  rightValue: string,
  width: string,
  bold: boolean
) => {
  return (
    <Stack direction="row" spacing={-0.5}>
      <TypographyComponent
        variant={bold ? "body1" : 'overline'}
        text={leftValue}
        color={theme.palette.textColor.highEmphasis}
        sx={{textTransform:'none'}}
      />
      <IconComponent
        src={dottedLine}
        width={width}
        height={"4px"}
        padding={bold ? '0 0 1px 0' : '0 0 4px 0'}
      />
      <TypographyComponent
        variant={bold ? "body1" : 'overline'}
        text={`${rightValue}`}
        color={theme.palette.textColor.highEmphasis}
        display="flex"
        justifyContent={"end"}
      />
    </Stack>
  );
};

const StyledButtonComponent = styled(ButtonComponent)({
  width: "479px",
  height: "42px",
});

const typographyStyle = {
  color: theme.palette.textColor.mediumEmphasis,
};

const SummaryCard: React.FC<SummaryCardProps> = ({
  type,
  btcValue,
  price,
  onClick,
  amount,
}) => {
  price = price ? price : dollarValue;
  amount = amount ? amount : btcValue * price;
  const total = type === "buy" ? amount + 1000 : amount - 1000;
  return (
    <StyledBox data-testid="summary-card">
      <TypographyGrid container spacing="12px" direction={"column"}>
        <Grid item xs={12}>
          <TypographyComponent
            variant="caption1"
            text={`You are ${type}ing`}
            style={typographyStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <TypographyComponent variant="h6" text={`${btcValue} BTC`} />
        </Grid>
        <Grid item xs={12}>
          <TypographyComponent
            variant="caption1"
            text={`1BTC = ${formatCurrency.format(price)}`}
            style={typographyStyle}
          />
        </Grid>
      </TypographyGrid>

      <StepperBox>
        <PaymentSummaryStepper />
      </StepperBox>

      <TotalBox spacing={2} direction={"column"}>
        {renderOrderSummary(
          `${btcValue} BTC`,
          formatCurrency.format(amount),
          "330px",
          false
        )}
        {renderOrderSummary("transaction fee", "$1,000.00", "333px", false)}
        {renderOrderSummary(
          "Total",
          formatCurrency.format(total),
          "330px",
          true
        )}
        <StyledButtonComponent
          variant="contained"
          text={type === "buy" ? "BUY NOW" : "SELL NOW"}
          backgroundColor={
            type === "buy"
              ? theme.palette.primary.main
              : theme.palette.primary.warning300
          }
          onClick={() => {
            onClick(btcValue);
          }}
        />
      </TotalBox>
    </StyledBox>
  );
};

export default SummaryCard;
