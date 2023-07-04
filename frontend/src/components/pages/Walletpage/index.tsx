import React from "react";
import DashBoardTemplate from "../../templates/DashBoardTemplate";
import Header from "../../molecules/Header";
import { menuItems } from "../../../constants";
import Footer from "../../molecules/footer";
import SideNavComponent from "../../molecules/sideNavbar";
import WalletBody from "../../organisms/walletBody";

const WalletPage = () => {

  
  const header = <Header pageName={"Trade"} displayButtons={true} />;
  const footer = <Footer menuItems={menuItems} buttonLabel="Need Help" data-testid="footer" />;
  const sideNav = <SideNavComponent data-testid="sideNav" />;

  return (
  
      <DashBoardTemplate
        header={header}
        sideNav={sideNav}
        footer={footer}
        paddingTop="24px"
      >
        <WalletBody  placeholderText="Search all assests" />
      </DashBoardTemplate>
  
  );
};

export default WalletPage;