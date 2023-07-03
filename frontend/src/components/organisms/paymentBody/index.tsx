import { Box, styled } from "@mui/material";
import React from "react";
import Correct from "../../../../public/assets/images/success.svg";
import IconComponent from "../../atoms/icon";
import MuiTypography from "../../atoms/typography";
import ButtonComponent from "../../atoms/button";
import theme from "../../../theme";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  width: "80vw",
  height:'75vh',
  background: "#FFFFF",
});

interface PaymentBodyProps {
  TotalBitcoin: number;
  TradeType: "BUY CRYPTO" | "SELL CRYPTO";
  cointype:string;
}

const PaymentBody = ({ TotalBitcoin, TradeType, cointype }: PaymentBodyProps) => {
  return (
    <StyledBox>
      <IconComponent src={Correct} height="64px" width="64px"></IconComponent>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
        width={"322px"}
      >
        <MuiTypography
          variant="h4"
          sx={{ color: theme.palette.textColor.highEmphasis }}
          text={`${TotalBitcoin} ${cointype}`}
        ></MuiTypography>
        <MuiTypography
          variant="body2" textAlign={'center'}
          sx={{ color: theme.palette.textColor.highEmphasis }}
          text={
            TradeType === "BUY CRYPTO"
              ? "Purchase is completed, Please check your balance in crypto wallet"
              : "Sell is completed, Please check your balance in Rupee wallet"
          }
        ></MuiTypography>
      </Box>

      <Box display={"flex"} flexDirection={"row"} alignItems={'center'} alignContent={'center'} gap={"24px"}>
        <ButtonComponent
          variant="outlined"
          sx={{
            color: theme.palette.primary.main,
            width: "151px",
            height: "42px",
          }}
          text={TradeType}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          sx={{
            color: theme.palette.structural.main,
            width: "155px",
            height: "42px",
          }}
          text="GO TO USD COIN"
        ></ButtonComponent>
      </Box>
    </StyledBox>
  );
};

export default PaymentBody;
