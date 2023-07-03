import React, { useEffect, useState } from "react";
import { fetchAllCrtptoCurrenices, fetchWallet } from "../../../services/index";
import DashBoardTemplate from "../../templates/DashBoardTemplate";
import Header from "../../molecules/Header";
import SideNavComponent from "../../molecules/sideNavbar";
import Footer from "../../molecules/footer";
import { menuItems,Wallet } from "../../../constants";
import { Stack } from "@mui/material";
import BuyCurrency from "../../organisms/BuyCurrency";
import AccountDetails from "../../organisms/AccountDetails";
import SummaryCard from "../../organisms/SummaryCard";
import rupee from "../../../../public/assets/icons/rupee.svg"

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

const Purchase = () => {
  const [quantity, setQuantity] = useState(0);
  const [currenciesData, setCurrenciesData] = useState<CryptoCurrency[]>([])
  const [wallet, setWallet] = useState<Wallet>({
      id: "bitcoin",
      name: "Bitcoin",
      balance: 1,
      avg_value: 16000,
      invested_amount: 16000
  });

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const currenciesData = await fetchAllCrtptoCurrenices();
        setCurrenciesData(currenciesData);
  
        const walletData = await fetchWallet("cash");
        console.log(walletData);
        setWallet(walletData);
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
    const balance = wallet.balance - quantity * currenciesData[0].price;
    const updatedWallet = { ...wallet, balance: balance };
    setWallet(updatedWallet);
  };

  return (
    <div data-testid="quantity-input">
      <DashBoardTemplate
        header={<Header displayButtons={false} pageName={"Dashboard"} />}
        sideNav={<SideNavComponent />}
        footer={<Footer menuItems={menuItems} buttonLabel="Need Help" />}
      >
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Stack gap={2} width="60vw">
            <BuyCurrency currenciesData={currenciesData} />
            <AccountDetails
              variant="payment"
              title="Payment Method"
              transactionType="buy"
              balance={wallet ? wallet.balance : 0}
              icon={rupee}
              coinType="Bitcoin"
              price={currenciesData[0]?.price}
              fee="10"
              wallet={true}
              coin="Bitcoin BTC"
              instantTime="Instant"
              deliveryTitle="Select speed delivery"
              handleChange={handleChange}
              coinSymbol="BTC"
            />
          </Stack>
          <Stack width="38vw">
            <SummaryCard
              type="buy"
              btcValue={quantity ? quantity : 0}
              onClick={handleClick}
            />
          </Stack>
        </Stack>
      </DashBoardTemplate>
    </div>
  );
};

export default Purchase;
