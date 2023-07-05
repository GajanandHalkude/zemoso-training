import React, { useEffect, useState } from "react";
import { addTransaction, fetchAllCrtptoCurrenices, fetchWallet } from "../../../services/index";
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
import { useLocation, useNavigate } from "react-router-dom";

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
export interface CurrencylocationState {
  coindId: string
}


const Purchase = () => {
  const location = useLocation();
  const { coindId } = location.state as CurrencylocationState ;

  const [quantity, setQuantity] = useState(0);
  const [currenciesData, setCurrenciesData] = useState<CryptoCurrency[]>([])
  const [total, setTotal] = useState(0)
  const [wallet, setWallet] = useState<Wallet>({
      id: coindId,
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
  const navigate = useNavigate()
  const bitcoindetails = currenciesData.find((item) => item.id === coindId) as CryptoCurrency
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US');
  const Transaction =  {
    "cryptoId":coindId,
    "transactionDateTime": formattedDate,
    "quantity":quantity,
    "symbol": bitcoindetails?.symbol,
    "transactionType": "buy",
    "price":total ,
    "status": "success",
    "from": "SaiPrabhu"
  }
  const handleClick = () => {
    const balance = wallet.balance - quantity * currenciesData[0].price;
    const updatedWallet = { ...wallet, balance: balance };
    setWallet(updatedWallet);
    addTransaction(Transaction)
    navigate('/paymentsuccess', {
      state: { totalBalance:quantity, tradeType: 'BUY CRYPTO', cointype:'BTC'  },
    })
  };

  return (
    <div data-testid="quantity-input">
      <DashBoardTemplate
        header={<Header displayButtons={false} pageName={"Checkout"} />}
        sideNav={<SideNavComponent />}
        footer={<Footer menuItems={menuItems} buttonLabel="Need Help" />}
      >
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Stack gap={2} width="60vw">
            <BuyCurrency currenciesData={currenciesData} coin={coindId} />
            <AccountDetails
              variant="payment"
              title="Payment Method"
              transactionType="buy"
              balance={wallet ? wallet.balance : 0}
              icon={rupee}
              coinType={bitcoindetails?.name}
              price={bitcoindetails?.price}
              fee="10"
              wallet={true}
              coin={`${bitcoindetails?.name} ${bitcoindetails?.symbol.toUpperCase}`}
              instantTime="Instant"
              deliveryTitle="Select speed delivery"
              handleChange={handleChange}
              coinSymbol={bitcoindetails?.symbol.toUpperCase()}
            />
          </Stack>
          <Stack width="38vw">
            <SummaryCard
              type="buy"
              btcValue={quantity ? quantity : 0}
              onClick={handleClick}
              setTotal={setTotal}
            />
          </Stack>
        </Stack>
      </DashBoardTemplate>
    </div>
  );
};

export default Purchase;
