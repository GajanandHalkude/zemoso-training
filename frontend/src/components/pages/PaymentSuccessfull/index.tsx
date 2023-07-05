import React from "react";
import DashBoardTemplate from "../../templates/DashBoardTemplate";
import PaymentBody from "../../organisms/paymentBody";
import Header from "../../molecules/Header";
import Footer from "../../molecules/footer";
import SideNavComponent from "../../molecules/sideNavbar";
import { menuItems } from '../../../constants'
import { useLocation } from "react-router-dom";

export interface PaymentSuccessProps {
  totalBalance: number;
  tradeType: "BUY CRYPTO" | "SELL CRYPTO";
  cointype: "BTC" | "ETH"
}

const PaymentSuccess = () => {
  const location = useLocation();
  const {   totalBalance, tradeType, cointype } = location.state as PaymentSuccessProps ;
  
  const header = (
    <Header pageName={"Checkout"} displayButtons={true} />
  );
  const footer = (
    <Footer menuItems={menuItems} buttonLabel="Need Help" />
  );
  const sideNav = (
    <SideNavComponent />
  );
  return (
      <DashBoardTemplate
        header={header}
        sideNav={sideNav}
        footer={footer}
        paddingTop="24px"
      >
        <PaymentBody TotalBitcoin={totalBalance} TradeType={tradeType} cointype={cointype} />
      </DashBoardTemplate>
  );
};

export default PaymentSuccess;
