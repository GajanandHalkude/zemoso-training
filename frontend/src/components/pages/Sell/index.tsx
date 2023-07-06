import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MuiTypography, menuItems, pictures } from "../../../constants";
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
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US');
  const navigate = useNavigate();
  const bitcoindetails = currenciesData.find((item) => item.id === coindId) as CryptoCurrency
  const NewTransactionData =  {
    "cryptoId":coindId,
    "transactionDateTime": formattedDate,
    "quantity":quantity,
    "symbol":bitcoindetails?.symbol,
    "transactionType": "sell",
    "price":Total ,
    "status": "success",
    "from": "lakshmi"
  }
  
  const handleClick = () => {
    if(walletQuantity>=quantity){
    const remainingQuantity = walletQuantity - quantity;
    fetchWallet("cash").then((wallet) => {
      wallet.balance = wallet.balance + Total - 1000
      wallet.invested_amount = wallet.invested_amount + Total - 1000
      updateWallet("cash", wallet)
    })
    fetchWallet(coindId).then((wallet) => {
      wallet.balance = wallet.balance - quantity
      wallet.invested_amount = wallet.invested_amount - Total + 1000
      wallet.avgValue = wallet.invested_amount / wallet.balance
      if (wallet.balance === 0) {
        wallet.invested_amount = 0
        wallet.avgValue=0
      }
      updateWallet(coindId, wallet)
    })
    addTransaction(NewTransactionData)
    setWalletQuantity(remainingQuantity)}
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
          <Stack gap={2} width="60vw">
            <MuiTypography variant='subtitle1' text={'Sell Crypto'} sx={{fontSize:'20px', color:theme.palette.textColor.highEmphasis}} />
            <BuyCurrency coin={coindId} currenciesData={currenciesData} />
            <AccountDetails
              variant="payment"
              title="Payment Method"
              transactionType="sell"
              balance={walletQuantity}
              icon={pictures[coindId]}
              coinType={bitcoindetails?.name}
              price={bitcoindetails?.price}
              fee="1000"
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
              type="sell"
              btcValue={quantity ? quantity : 0}
              onClick={handleClick}
              setTotal={settotal}   />
          </Stack>
        </Stack>
      </DashBoardTemplate>
    </div>
  );
};

export default Sell;
