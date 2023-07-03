import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { menuItems } from "../../../constants";
import { fetchAllCrtptoCurrenices, fetchWallet } from "../../../services/index";
import Header from "../../molecules/Header";
import Footer from "../../molecules/footer";
import SideNavComponent from "../../molecules/sideNavbar";
import AccountDetails from "../../organisms/AccountDetails";
import BuyCurrency from "../../organisms/BuyCurrency";
import SummaryCard from "../../organisms/SummaryCard";
import DashBoardTemplate from "../../templates/DashBoardTemplate";
import bitcoin from "../../../../public/assets/images/bitcoin.svg"
export interface CryptoCurrency {
  id: string
  name: string
  symbol: string
  icon: string
  price: number
  marketCap: number
  totalSupply: number
  availableSupply: number
  priceChange:number
  volume: number
}
const Sell = () => {
  const [quantity, setQuantity] = useState(0);
  const [currenciesData, setCurrenciesData] = useState<CryptoCurrency[]>([])
  const [walletQuantity, setWalletQuantity] = useState<number>(0);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const currenciesData = await fetchAllCrtptoCurrenices();
        setCurrenciesData(currenciesData);
  
        const walletQuantity = await fetchWallet("bitcoin");
        setWalletQuantity(walletQuantity.balance);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };
  
    fetchCurrencyData();
  }, []);
  const handleChange = (event: any) => {
    setQuantity(event);
  };

  const handleClick = () => {
    if(walletQuantity>=quantity){
    const remainingQuantity = walletQuantity - quantity;
    setWalletQuantity(remainingQuantity);}
  };
console.log(currenciesData)
  return (
    <div data-testid="quantity-input" >
      <DashBoardTemplate data-testid="quantity-input"
        header={<Header displayButtons={true} pageName={"Dashboard"} />}
        sideNav={<SideNavComponent />}
        footer={<Footer menuItems={menuItems} buttonLabel="Need Help" />}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack gap={2} width="60vw">
            <BuyCurrency currenciesData={currenciesData} />
            <AccountDetails
              variant="payment"
              title="Payment Method"
              transactionType="sell"
              balance={walletQuantity}
              icon={bitcoin}
              coinType="Bitcoin"
              price={currenciesData[0]?.price}
              fee="1000"
              wallet={true}
              coin="Bitcoin BTC"
              instantTime="Instant"
              deliveryTitle="Select speed delivery"
              handleChange={handleChange}
              coinSymbol="BTC"
            />
          </Stack>
          <Stack width="30vw">
            <SummaryCard
              type="sell"
              btcValue={quantity ? quantity : 0}
              onClick={handleClick}   />
          </Stack>
        </Stack>
      </DashBoardTemplate>
    </div>
  );
};

export default Sell;
