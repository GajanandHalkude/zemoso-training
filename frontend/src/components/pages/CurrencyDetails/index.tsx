import React from "react";
import DetailsScrennBody from "../../organisms/detailsScreenBody";
import DashBoardTemplate from "../../templates/DashBoardTemplate";
import Header from "../../molecules/Header";
import SideNavComponent from "../../molecules/sideNavbar";
import Footer from "../../molecules/footer";
import { menuItems } from "../../../constants";

const CurrencyDetails = () => {
  return (
    <DashBoardTemplate data-testid="currencyDetails"
      paddingTop="24px"
      header={<Header displayButtons={true} pageName={"Trade"}></Header>}
      sideNav={<SideNavComponent ></SideNavComponent>}
      footer={<Footer buttonLabel="NEED HELP" menuItems={menuItems}></Footer>}
    >
      <DetailsScrennBody />
    </DashBoardTemplate>
  );
};
export default CurrencyDetails;
