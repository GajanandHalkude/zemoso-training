import React from "react";
import PaymentAndDetailsCard from "../myWallet";
import DeliveryDropdown from "../DeliveryDropDown";
import AmountDetails from "../AmountDetails";
import styled from "styled-components";
import rupee from "../../../../public/assets/icons/rupee.svg";

export interface AccountDetailsProps {
  variant: "payment" | "balance" | "deposit" | "wallet";
  title: string;
  icon: string;
  coinType: string;
  balance: number;
  coinSymbol: string;
  wallet: boolean;
  instantTime: string;
  fee: string;
  price: number;
  transactionType: "buy" | "sell";
  coin: string;
  deliveryTitle: string;
  handleChange: (quantity: number, amount: number) => void;
}

const AccountDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AccountDetails = ({
  variant,
  title,
  transactionType,
  balance,
  icon,
  coinType,
  price,
  fee,
  wallet,
  coin,
  instantTime,
  handleChange,
  deliveryTitle,
  coinSymbol,
}: AccountDetailsProps) => {
  if (transactionType === "buy") {
    return (
      <React.Fragment data-testid="body1">
        <AccountDetailsContainer>
          <PaymentAndDetailsCard
            variant={variant}
            title={title}
            icon={icon}
            coinType={coinType}
            balance={balance}
            wallet={wallet}
            coinSymbol={coinSymbol}
          />

          <AmountDetails
            price={price}
            balance={balance}
            transactionType={transactionType}
            coin={coin}
            handleChange={handleChange}
          />
          <DeliveryDropdown
            instantTime={instantTime}
            fee={fee}
            title={deliveryTitle}
          />
        </AccountDetailsContainer>
      </React.Fragment>
    );
  } else if (transactionType === "sell") {
    return (
      <>
        <AccountDetailsContainer>
          <PaymentAndDetailsCard
            variant="balance"
            title="Total Balance"
            icon={icon}
            coinType={coinType}
            balance={balance}
            wallet={wallet}
            coinSymbol={coinSymbol}
          />

          <AmountDetails
            price={price}
            balance={balance}
            transactionType={transactionType}
            coin={coin}
            handleChange={handleChange}
          />

          <PaymentAndDetailsCard
            variant="deposit"
            title="Deposit To"
            icon={rupee}
            coinType="USD Coin (cash)"
            balance={balance}
            wallet={wallet}
          />
        </AccountDetailsContainer>
      </>
    );
  }
};

export default AccountDetails;
