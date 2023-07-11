/* eslint-disable @typescript-eslint/no-empty-function */
import { Box, MenuItem, Select, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../../theme";
import TabsComponent from "../../molecules/Tabs";
import PortfolioGraphComponent from "../PortfolioGraph";
import MuiTypography from "../../atoms/typography";
import SearchField from "../../molecules/SearchFilter";
import CurrencyDetailsBanner from "../../molecules/currencyDetailsBanner";
import {
  Graphcategories,
  formatCurrency,
  pictures,
  timeLineValues,
  Transaction
} from "../../../constants";
import WalletTransactionTab from "../../molecules/walletTransactionTab";
import Success from "../../../../public/assets/icons/Correct.svg";
import Fail from "../../../../public/assets/images/t-fail.svg";
import Pending from "../../../../public/assets/images/t-pending.svg";
import WatchListBar from "../watchListBar";
import {
  addWatchList,
  fetchCrtptoCurrenicyById,
  fetchTransactions,
  fetchWatchList,
  getGraphData,
  removeWatchList,
} from "../../../services/index";
import { useLocation } from "react-router-dom";

const TotalBalanceBox = styled(Box)(() => ({
  backgroundColor: theme.palette.greyColors.grey50,
  display: "flex",
  padding: "16px 24px",
  gap: "10px",
}));

const SearchBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
}));

const Tab1Styles = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));

const StyledDropDown = styled(Select)(() => ({
  "& .MuiSelect-select": {
    height: "22px",
    padding: "9px 0 8px 4px !important",
  },
  "& .MuiTypography-root": {
    paddingLeft: "8px !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.greyColors.grey100} !important`,
    padding: "0px",
  },
  input: {
    "&::placeholder": {
      padding: "0px !important",
      color: "textColor.main",
      fontFace: "body2",
    },
  },
}));

const StyledGridTransactions = styled(Box)({
  overflowY: "scroll",
  "&::-webkit-scrollbar": { width: "0.3rem" },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.structural.main,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.greyColors.grey300,
    borderRadius: "10px",
  },
  paddingRight: "0.6rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  padding: "18px 0px ",
  gap: "12px",
  height: "566px",
  background: theme.palette.structural.main,
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: "4px",
});
export const getCurrencyLogo = (status: string) => {
  if (status === "success") {
    return Success;
  } else if (status === "pending") {
    return Pending;
  } else {
    return Fail;
  }
};
export interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  marketCap: number;
  totalSupply: number;
  availableSupply: number;
  priceChange: number;
  volume: number;
}
interface CurrencylocationState {
  coindId: string
}

const DetailsScrennBody = () => {
  const location = useLocation();
  const { coindId } = location.state as CurrencylocationState ;
  const [watchListId, setWatchListId] = useState<string>("");
  const [isAddedToWatchList, setIsAddedToWatchList] = useState<boolean>(false);
  const [cryptoCurrency, setCryptoCurrency] = useState<CryptoCurrency>({
    id: "",
    name: "",
    symbol: "",
    icon: "",
    price: 0,
    marketCap: 0,
    totalSupply: 0,
    availableSupply: 0,
    priceChange: 0,
    volume: 0,
  });
  const [graphData, setGraphData] = useState<number[]>([])
  const [transaction, setTransaction] = useState<Transaction[]>([]);
  useEffect(() => {
    fetchCrtptoCurrenicyById(coindId)
      .then((res) => {
        setCryptoCurrency(res);
        fetchWatchList()
          .then(async (data) => {
            isthereInWatchlist(data,res.id) ? setWatchListId(res.id) : setWatchListId("");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      })
      .finally(() => {
        if (cryptoCurrency.id) {
          getGraphData(cryptoCurrency.id)
            .then((res) => {
              setGraphData(res);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  
    fetchTransactions()
      .then((res) => {
        setTransaction(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  useEffect(() => {
    setIsAddedToWatchList(watchListId ? true : false);
  }, [watchListId]);

  const isthereInWatchlist = (data:any,id:any) =>{
    let isthere = false;

    data.map((d:any)=>{
      if(d.id === id){
        isthere = true
      }
    })

    return isthere
 }

  const handleClick = async () => {
    setIsAddedToWatchList((prevstate) => !prevstate);
    if (isAddedToWatchList) {
      await removeWatchList(watchListId).catch((error) => console.log(error));
    } else {
      await addWatchList(cryptoCurrency?.id).catch((error) =>
        console.log(error)
      );
    }
  };
  const totalBalance = ()=>{
    const purchaseTransaction = transaction?.filter((data) => data.transactionType === "buy");

    let totalValue = 0;
    let totalPrice = 0;
    purchaseTransaction.forEach((data) => {
      totalValue = totalValue + data.quantity;
      totalPrice = totalPrice + data.price;
  });
    
    return `${totalValue.toLocaleString('en-US', {maximumFractionDigits:2})} BTC (${formatCurrency.format(totalPrice)})`
    
  }
  return (
    <Tab1Styles data-testid="detailsScreen">
      <WatchListBar
        key={cryptoCurrency.id}
        coinIcon={pictures[cryptoCurrency?.icon]}
        coinName={cryptoCurrency.name}
        coinSymbol={cryptoCurrency.symbol.toUpperCase()}
        percentageChange={cryptoCurrency.priceChange}
        isAddedtoWishList={isAddedToWatchList}
        marketCap={cryptoCurrency.marketCap}
        volumeIn24H={cryptoCurrency.volume}
        circulatingSupply={cryptoCurrency.totalSupply}
        handleClickForWatchListButton={handleClick}
      />

      <TabsComponent
        label1="Overview"
        label2="Wallet"
        width="100%"
        body1={
          <Tab1Styles data-testid="body1">
            <PortfolioGraphComponent
              height="246"
              width="100%"
              categories={Graphcategories}
              borderColor={theme.palette.graphColor.borderColor}
              fillColor={theme.palette.graphColor.fillColor}
              borderColor2={theme.palette.graphColor.borderColor2}
              fillColor2={theme.palette.graphColor.fillColor2}
              dashboardPage={false}
              data={[
                19418.037989243952, 19448.14900175761, 19142.694767392895,
                19758.628039738272, 19153.039779986986, 19406.380947809706,
              ]}
              data2={graphData}
              investmentValue={1000002}
              typeOfInvestment="Current value"
              percentChange={+1.2}
              investmentValue2={34000}
              percentChange2={-1.2}
              typeOfInvestment2="Bitcoin"
              isEmptyState={false}
            />
            <CurrencyDetailsBanner
              data-testid="portfolio-tab"
              aboutCurrency="About Bitcoin"
            />
          </Tab1Styles>
        }
        body2={
          <Box
            display="flex"
            gap="12px"
            flexDirection="column"
            data-testid="body2"
          >
            <TotalBalanceBox>
              <MuiTypography
                variant="subtitle1"
                color="textColor.highEmphasis"
                text="Total Balance"
              />
              <MuiTypography
                data-testid="BTC-value"
                variant="subtitle1"
                color="textColor.highEmphasis"
                text={totalBalance()}
              />
            </TotalBalanceBox>
            <SearchBox data-testid="searchBox">
              <SearchField
                data-testid="searchField"
                placeholder="Search all assets"
                filter={true}
                handleChange={() => {}}
                backgroundColor={theme.palette.structural.main}
              />
              <StyledDropDown
                data-testid="dropDown"
                defaultValue={timeLineValues[0]}
                onChange={(e) => e.target.value}
                sx={{
                  width: "77px",
                  backgroundColor: theme.palette.structural.main,
                }}
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                }}
              >
                {timeLineValues.map((menuItem) => (
                  <MenuItem
                    key={menuItem}
                    value={menuItem}
                    data-testid={menuItem}
                  >
                    <MuiTypography variant="body1" text={menuItem} />
                  </MenuItem>
                ))}
              </StyledDropDown>
            </SearchBox>
            <StyledGridTransactions data-testid="styledGridTransactions">
              {transaction?.map((data: any) => (
              <WalletTransactionTab
              data-testid="WalletTransactionTab"
              key={data.id}
              currencyLogo={getCurrencyLogo(data.status)}
              currencyName={cryptoCurrency.name}
              userDescription={`from ${data.from}`}
              currency={data.transactionType === "sell" ? `-${data.quantity}` : `+${data.quantity}`}
              marketCap={data.transactionType === "sell" ? `-$${data.price}` : `+$${data.price}`}
              date={data.transactionDateTime}
              chiplabel={
                data.transactionType === "buy" ? "Purchased" : "Sold"
              }
              symbol={data.symbol}
            />
              ))}
            </StyledGridTransactions>
          </Box>
        }
      />
    </Tab1Styles>
  );
};

export default DetailsScrennBody;

