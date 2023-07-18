import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MuiTypography, constFee1000, deliveryDrop, instantTime, menuItems, paymentMethodTitle, pictures, sellTransactionType, variantTypePayment } from "../../../constants";
import { addTransaction, fetchAllCrtptoCurrenices, fetchWallet, updateWallet } from "../../../services/index";
import Header from "../../molecules/Header";
import Footer from "../../molecules/footer";
import SideNavComponent from "../../molecules/sideNavbar";
import AccountDetails from "../../organisms/AccountDetails";
import BuyCurrency from "../../organisms/BuyCurrency";
import SummaryCard from "../../organisms/SummaryCard";
import DashBoardTemplate from "../../templates/DashBoardTemplate";
import { useLocation, useNavigate } from "react-router-dom";
import theme from "../../../theme";
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
const Sell = () => {
  const location = useLocation();
  const { coindId } = location.state as CurrencylocationState ;
  const [quantity, setQuantity] = useState(0);
  const [currenciesData, setCurrenciesData] = useState<CryptoCurrency[]>([])
  const [walletQuantity, setWalletQuantity] = useState<number>(0);
  const [Total, settotal] = useState(0)

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const currenciesData = await fetchAllCrtptoCurrenices();
        setCurrenciesData(currenciesData);
  
        const walletQuantity = await fetchWallet(coindId === 'bitcoin' ? '2' : '3');
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
  const navigate = useNavigate();
  const bitcoindetails = currenciesData.find((item) => item.id === coindId) as CryptoCurrency
  const NewTransactionData =  {
    "currencyId":coindId,
    "date": new Date(),
    "quantity":quantity,
    "symbol":bitcoindetails?.symbol,
    "type": "sell",
    "price":Total ,
    "status": "success",
    "transactionPerson": "lakshmi"
  }
  
  const handleClick = () => {
    if(walletQuantity>=quantity){
    const remainingQuantity = walletQuantity - quantity;
    fetchWallet("1").then((wallet) => {
      wallet.balance = wallet.balance + Total - 1000
      wallet.investedAmount = wallet.investedAmount + Total - 1000
      updateWallet("1", wallet)
    })
    fetchWallet(coindId === 'bitcoin' ? '2' : '3').then((wallet) => {
      wallet.balance = wallet.balance - quantity
      wallet.investedAmount = wallet.investedAmount - Total + 1000
      wallet.avgValue = wallet.investedAmount / wallet.balance
      if (wallet.balance === 0) {
        wallet.investedAmount = 0
        wallet.avgValue=0
      }
      updateWallet(coindId === 'bitcoin' ? '2' : '3', wallet)
    })
    addTransaction(NewTransactionData)
    setWalletQuantity(remainingQuantity)
  }
    navigate('/paymentsuccess', {
      state: { totalBalance:quantity, tradeType: 'SELL CRYPTO', cointype:'BTC'  },
    })
  };

  return (
    <div data-testid="quantity-input">
      <DashBoardTemplate data-testid="quantity-input"
        header={<Header displayButtons={true} pageName={"Dashboard"} />}
        sideNav={<SideNavComponent />}
        footer={<Footer menuItems={menuItems} buttonLabel="Need Help" />}
      >
        <Stack direction="row" justifyContent="space-between" marginBottom={'30px'} gap={'15px'}>
          <Stack width="53vw">
            <MuiTypography variant='subtitle1' text={'Sell Crypto'} sx={{fontSize:'20px', color:theme.palette.textColor.highEmphasis}} />
            <BuyCurrency coin={coindId} currenciesData={currenciesData} />
            <AccountDetails
              variant={variantTypePayment}
              title={paymentMethodTitle}
              transactionType={sellTransactionType}
              balance={walletQuantity}
              icon={pictures[coindId]}
              coinType={bitcoindetails?.name}
              price={bitcoindetails?.price}
              fee={constFee1000}
              wallet={true}
              coin={`${bitcoindetails?.name} ${bitcoindetails?.symbol.toUpperCase()}`}
              instantTime={instantTime}
              deliveryTitle={deliveryDrop}
              handleChange={handleChange}
              coinSymbol={bitcoindetails?.symbol.toUpperCase()}
            />
          </Stack>
          <Stack width="36vw">
            <SummaryCard
              type="sell"
              btcValue={quantity ? quantity : 0}
              onClick={handleClick}
              setTotal={settotal} symbol={bitcoindetails?.symbol.toUpperCase()} 
              name={bitcoindetails?.name}/>
          </Stack>
        </Stack>
      </DashBoardTemplate>
    </div>
  );
};

export default Sell
