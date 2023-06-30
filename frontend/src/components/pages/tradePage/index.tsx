import React from "react"
import DashBoardTemplate from "../../templates/DashBoardTemplate"
import Header from "../../molecules/Header"
import Footer from "../../molecules/footer"
import { menuItems } from "../../../constants"
import SideNavComponent from "../../molecules/sideNavbar"
import TradeFrame from "../../organisms/tradeFrame"

const TradePage = () => { 
    return (
        <DashBoardTemplate 
        header={<Header pageName="Dashboard" displayButtons />} 
        sideNav={<SideNavComponent/>} 
        footer={<Footer menuItems={menuItems} buttonLabel='Need Help' />}
        >
            <TradeFrame />
        </DashBoardTemplate>
    )
}
export default TradePage