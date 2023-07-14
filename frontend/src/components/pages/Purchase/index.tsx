import React, { useEffect, useState } from "react";
import { addTransaction, fetchAllCrtptoCurrenices, fetchWallet, updateWallet } from "../../../services/index";
import DashBoardTemplate from "../../templates/DashBoardTemplate";
import Header from "../../molecules/Header";
import SideNavComponent from "../../molecules/sideNavbar";
import Footer from "../../molecules/footer";
import { buyTransactionType, constFee10, deliveryDrop, instantTime, menuItems,MuiTypography,paymentMethodTitle,UsdName,variantTypePayment,Wallet } from "../../../constants";
import { Stack } from "@mui/material";
import BuyCurrency from "../../organisms/BuyCurrency";
import AccountDetails from "../../organisms/AccountDetails";
import SummaryCard from "../../organisms/SummaryCard";
import rupee from "../../../../public/assets/icons/rupee.svg"
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


const Purchase = () => {
  const location = useLocation();
  const { coindId } = location.state as CurrencylocationState ;

  const [quantity, setQuantity] = useState(0);
  const [currenciesData, setCurrenciesData] = useState<CryptoCurrency[]>([])
  const [total, setTotal] = useState(0)
  const [cryptoWallet, setCryptoWallet] = useState<Wallet>()
  const [wallet, setWallet] = useState<Wallet>({
      id: coindId,
      name: "Bitcoin",
      balance: 1,
      avgValue: 0,
      investedAmount: 0
  });

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const currenciesData = await fetchAllCrtptoCurrenices();
        setCurrenciesData(currenciesData);
        const walletData = await fetchWallet("1");
        setWallet(walletData);
        const cryptoWalletData = await fetchWallet(coindId === 'bitcoin' ? '2' : '3')
        setCryptoWallet(cryptoWalletData)
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
    "currencyId":coindId,
    "date": new Date(),
    "quantity":quantity,
    "symbol": bitcoindetails?.symbol,
    "type": "buy",
    "price":total ,
    "status": "success",
    "transactionPerson": "SaiPrabhu"
  }
  const handleCashWallet = (price: number, quantity: number) => {
    const updatedWallet = wallet
    if (updatedWallet) {
      const amount = parseFloat((price * quantity + 1000).toFixed(2))
      updatedWallet.balance = updatedWallet.balance - amount
      updatedWallet.investedAmount = updatedWallet.investedAmount - amount
      updateWallet(wallet?.id,updatedWallet)
    }
  }
  const handleCryptoWallet = (price: number, quantity: number) => {
    const updatedCryptoWallet = cryptoWallet
    if (updatedCryptoWallet) {
      const amount = parseFloat((price * quantity + 1000).toFixed(2))
      updatedCryptoWallet.balance = updatedCryptoWallet.balance + quantity
      updatedCryptoWallet.investedAmount =
        updatedCryptoWallet.investedAmount + amount
      if (updatedCryptoWallet.balance) {
        updatedCryptoWallet.avgValue =
          updatedCryptoWallet.investedAmount / updatedCryptoWallet.balance
      }
      updateWallet(cryptoWallet?.id,updatedCryptoWallet)
    }
  }
  const handleClick = () => {
    const balance = wallet.balance - quantity * bitcoindetails.price;
    const updatedWallet = { ...wallet, balance: balance };
    if (balance - 1000 >= bitcoindetails.price * quantity) {
    setWallet(updatedWallet);
    handleCashWallet(bitcoindetails.price, quantity)
    handleCryptoWallet(bitcoindetails.price, quantity)
    addTransaction(Transaction)
    navigate('/paymentsuccess', {
      state: { totalBalance:quantity, tradeType: 'BUY CRYPTO', cointype:'BTC'  },
    })
    }
  };

  return (
    <div data-testid="quantity-input">
      <DashBoardTemplate
        header={<Header displayButtons={false} pageName={"Checkout"} />}
        sideNav={<SideNavComponent />}
        footer={<Footer menuItems={menuItems} buttonLabel="Need Help" />}
      >
        <Stack direction="row" justifyContent="space-between" marginBottom={'30px'} gap={'15px'}>
          <Stack width="53vw">
            <MuiTypography variant='subtitle1' text={'Buy Crypto'} sx={{fontSize:'20px', color:theme.palette.textColor.highEmphasis}} />
            <BuyCurrency currenciesData={currenciesData} coin={coindId} />
            <AccountDetails
              variant={variantTypePayment}
              title={paymentMethodTitle}
              transactionType={buyTransactionType}
              balance={wallet ? wallet.balance : 0}
              icon={rupee}
              coinType={UsdName}
              price={bitcoindetails?.price}
              fee={constFee10}
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
              type="buy"
              btcValue={quantity ? quantity : 0}
              onClick={handleClick}
              setTotal={setTotal} symbol={bitcoindetails?.symbol.toUpperCase()} 
              name={bitcoindetails?.name}  />
          </Stack>
        </Stack>
      </DashBoardTemplate>
    </div>
  );
};

export default Purchase;
