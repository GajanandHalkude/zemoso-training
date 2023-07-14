import { Box, Slider, styled, TextField } from "@mui/material";
import ButtonComponent from "../../atoms/button";
import TypographyComponent from "../../atoms/typography";
import theme from "../../../theme/index";
import { formatCurrency, roundValue } from "../../../constants";
import { useCustomHook } from "./hook";
import CurrencyInput from "react-currency-input-field";
import React from "react";

export interface AmountDetailsCardProps {
  balance: number;
  price: number;
  transactionType: "buy" | "sell";
  coin: string;
  handleChange: (quantity: number, amount: number) => void;
}

const StyledInnerBox = styled(Box)(() => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  width: "100%",
  height: "74px",
  background: "#FFFFFF",
  borderRadius: "4px",
}));

const StyledContainer = styled(Box)(() => ({
  boxSizing: "border-box",
  height: "320px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px",
  gap: "12px",
  background: "#FFFFFF",
  border: "1px solid #E8E8F7",
  borderRadius: "4px",
}));

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-root": {
    fontWeight: "500 !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    color: `${theme.palette.textColor.highEmphasis}`,
  },
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px",
  gap: "12px",
  marginLeft: "44px",
  width: "221.11px",
  height: "88px",
}));

const StyledCurrency = styled(CurrencyInput)(() => ({
  border: "none",
  fontWeight: "500 !important",
  fontSize: "20px !important",
  lineHeight: "28px !important",
  padding: "0px",
  color: `${theme.palette.textColor.highEmphasis}`,
  "&:focus-visible": {
    outlineWidth: "0px !important",
  },
}));

const StyledSlider = styled(Slider)({
  color: "#ABABB3",
  height: "88px",
  width: "1px",
  "& .MuiSlider-thumb": {
    width: "12px",
    height: "12px",
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "none",
    },
    "&.Mui-active": {
      width: 20,
      height: 20,
    },
  },
  "& .MuiSlider-rail": {
    opacity: 1,
  },
  "& .MuiSlider-markLabel": {
    color: theme.palette.textColor.mediumEmphasis,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "16px",
  },
});

const StyledButton = styled(ButtonComponent)(() => ({
  padding: "0px 16px",
  height: "30px",
}));

const AmountDetailsCardComponent = ({
  balance,
  price,
  transactionType,
  coin,
  handleChange,
}: AmountDetailsCardProps) => {
  const {
    amount,
    setAmount,
    quantity,
    setQuantity,
    setIsAmountChanged,
    setIsQuantityChanged,
    error,
    setValue,
  } = useCustomHook({
    balance,
    price,
    transactionType,
    coin,
    handleChange,
  });
  const coinAbbrivation = coin.split(" ")[1];
  handleChange(quantity, amount);

  const handleUpperText = async (value: number) => {
    if (transactionType === "buy") {
      if (value === 0 || Number.isNaN(value)) setAmount(0);
      else setAmount(value);
      setIsAmountChanged(true);
    } else {
      if (value === 0 || Number.isNaN(value)) setQuantity(0);
      else setQuantity(roundValue(value));
      setIsQuantityChanged(true);
    }
  };

  const handleLowerText = async (value: number) => {
    if (transactionType === "sell") {
      if (value === 0 || Number.isNaN(value)) setAmount(0);
      else setAmount(roundValue(value));
      setIsAmountChanged(true);
    } else {
      if (value === 0 || Number.isNaN(value)) setQuantity(0);
      else setQuantity(value);
      setIsQuantityChanged(true);
    }
  };

  const handleClick = async () => {
    if (transactionType === "buy") {
      setAmount(balance - 1000);
      setIsAmountChanged(true);
    } else {
      setQuantity(balance);
      setIsQuantityChanged(true);
    }
  };

  const marks = [
    {
      value:
        ((transactionType === "buy" ? balance - 1000 : balance) -
          (transactionType === "buy" ? 1000 : 1000 / price)) /
          2 +
        (transactionType === "buy" ? 1000 : 1000 / price),
      label: `1BTC = ${formatCurrency.format(price)}`,
    },
  ];

  const handleSliderChange = (value: number | number[]) => {
    setValue(value as number);
    if (transactionType === "buy") {
      setAmount(value as number);
      setIsAmountChanged(true);
    } else {
      setQuantity(value as number);
      setIsQuantityChanged(true);
    }
  };

  return (
    <StyledContainer data-testid="amount details card">
      <TypographyComponent
        variant="body1"
        color={"textColor.highEmphasis"}
        text="Amount details"
      />

      <Box width="100%">
        <StyledInnerBox border={!error ? "1px solid #E8E8F7" : "1px solid red"}>
          {transactionType === "buy" ? (
            <StyledCurrency
              data-testid="upperField"
              value={amount}
              decimalsLimit={2}
              decimalScale={2}
              prefix="$"
              onValueChange={(value: any) => handleUpperText(value)}
            />
          ) : (
            <StyledTextField
              inputProps={{ "data-testid": "upperField" }}
              onChange={(e) =>
                handleUpperText(
                  parseFloat(e.target.value.replace(/[^0-9.-]+/g, ""))
                )
              }
              value={quantity}
            ></StyledTextField>
          )}
          <StyledButton
            data-testid="button"
            backgroundColor={"none"}
            variant="outlined"
            onClick={() => handleClick()}
            text={transactionType == "buy" ? "Buy max" : "Sell max"}
          />
        </StyledInnerBox>
        <StyledBox>
          <Box
            display="flex"
            height="100%"
            alignItems={"center"}
            justifyContent="center"
          >
            <StyledSlider
              orientation="vertical"
              value={transactionType === "buy" ? amount : quantity}
              track={false}
              min={transactionType === "buy" ? 1000 : 1000 / price}
              max={transactionType === "buy" ? balance - 1000 : balance}
              step={transactionType === "buy" ? 10 : 0.00000005}
              onChangeCommitted={(_, value) => handleSliderChange(value)}
              marks={marks}
            />
          </Box>
        </StyledBox>
        <StyledInnerBox border={!error ? "1px solid #E8E8F7" : "1px solid red"}>
          {transactionType === "sell" ? (
            <StyledCurrency
              data-testid="lowerField"
              placeholder="Please enter a number"
              value={amount}
              decimalsLimit={2}
              decimalScale={2}
              prefix="$"
              onValueChange={(value: any) => handleLowerText(value)}
            />
          ) : (
            <StyledTextField
              inputProps={{ "data-testid": "lowerField" }}
              onChange={(e) =>
                handleLowerText(
                  parseFloat(e.target.value.replace(/[^0-9.-]+/g, ""))
                )
              }
              value={quantity}
            ></StyledTextField>
          )}
          <TypographyComponent
            variant="body1"
            color={"textColor.mediumEmphasis"}
            text={
              transactionType === "sell" ? "USD coin (cash)" : coinAbbrivation
            }
          />
        </StyledInnerBox>
      </Box>
    </StyledContainer>
  );
};

export default AmountDetailsCardComponent;
