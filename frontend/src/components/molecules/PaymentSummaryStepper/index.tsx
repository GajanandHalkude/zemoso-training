import { Box, styled } from '@mui/material'
import React from 'react'
import IconComponent from '../../atoms/icon'
import TypographyComponent from '../../atoms/typography'
import Stepper from "../../../../public/assets/icons/stepper.svg";
import Wallet from "../../../../public/assets/icons/wallet.svg";
import BankCard from "../../../../public/assets/icons/bankCard.svg";
import Transport from "../../../../public/assets/icons/delivery.svg";
import theme from '../../../theme'
import { paymentSummaryStepper } from "../../../constants";

interface StepperProps {
  symbol:string;
  name:string;
  type?:string
}
const OuterBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  alignContent: 'center',
  marginTop: '5px',
}))

const ImageBox = styled(Box)(() => ({
  backgroundColor: theme.palette.greyColors.grey100,
  borderRadius: '50%',
  width: '42px',
  height: '42px',
}))

const InnerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center',
}))

const PaymentSummaryStepper = ({symbol,name,type}:StepperProps) => {
  return (
    <div>
      <OuterBox data-testid="summary-stepper">
        <InnerBox>
          <ImageBox>
            <IconComponent
              height="32px"
              width="32px"
              padding="5px 6px"
              src={BankCard}
            />
          </ImageBox>
          <OuterBox>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.mediumEmphasis }}
              text={type == "sell" ? paymentSummaryStepper.step1[2] : paymentSummaryStepper.step1[0]}
              sx={{fontSize:"14px"}}
            />
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.highEmphasis }}
              text={type == "sell" ? `${name || "Bitcoin"} wallet` : paymentSummaryStepper.step1[1]}
            />
          </OuterBox>
        </InnerBox>
        <IconComponent height="40px" width="40px" src={Stepper} />
        <InnerBox>
          <ImageBox>
            <IconComponent
              height="32px"
              width="32px"
              padding="5px 6px"
              src={Transport}
            />
          </ImageBox>
          <OuterBox>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.mediumEmphasis }}
              text={paymentSummaryStepper.step2[0]}
              sx={{fontSize:"14px"}}
            ></TypographyComponent>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.highEmphasis }}
              text={`0.01 ${symbol || "BTC"}`}
            ></TypographyComponent>
          </OuterBox>
        </InnerBox>
        <IconComponent height="40px" width="40px" src={Stepper} />
        <InnerBox>
          <ImageBox>
            <IconComponent
              height="32px"
              width="32px"
              padding="5px 6px"
              src={Wallet}
            />
          </ImageBox>
          <OuterBox>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.mediumEmphasis }}
              text={paymentSummaryStepper.step3[0]}
              sx={{fontSize:"14px"}}
            />
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.highEmphasis }}
              text={type == "sell" ? paymentSummaryStepper.step3[2] : `${name || "Bitcoin"} wallet`}
            />
          </OuterBox>
        </InnerBox>
      </OuterBox>
    </div>
  );
};

export default PaymentSummaryStepper;
