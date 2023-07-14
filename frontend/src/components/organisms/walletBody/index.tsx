import React, { useEffect, useState } from "react";
import Doller from "../../../../public/assets/images/doller.svg";
import IconComponent from "../../atoms/icon";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme";
import ButtonComponent from "../../atoms/button";
import SearchField from "../../molecules/SearchFilter";
import { fetchTransactions, fetchWallet } from "../../../services/index";
import Success from '../../../../public/assets/icons/Correct.svg';
import Fail from '../../../../public/assets/images/t-fail.svg';
import Pending from '../../../../public/assets/images/t-pending.svg';
import WalletTransactionTab from "../../molecules/walletTransactionTab";
import { Box, Grid, styled, MenuItem, Select } from "@mui/material";
import { Transaction} from "../../../constants";

export interface WalletBodyProps {
  placeholderText: string;
  handleSearchFilter?: () => void;
  handleDropdownChange?: (value: string) => void;
}

const StyledBoxUSDCoin = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
});

const StyledGridTransactons = styled(Grid)({
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
  padding: "24px 0px 24px 24px",
  gap: "12px",
  height: "566px",
  background: "#FFFFFF",
  border: "1px solid #E8E8F7",
  borderRadius: "0px 0px 4px 4px",
});

const StyledBoxTotalBalance = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  gap: "10px",
  height: "60px",
  background: "#F2F2F7",
  borderRadius: "4px",
});

const StyledGridHeader = styled(Grid)({
  background: theme.palette.structural.main,
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: "4px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  gap: "10px",

  height: "104px",
});

const StyledMuiTypographyWallet = styled(MuiTypography)({
  height: "28px",
  color: theme.palette.textColor.highEmphasis,
});

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

export const getCurrencyLogo = (status: string) => {
  if (status === 'success') {
    return Success;
  } else if (status === 'pending') {
    return Pending;
  } else {
    return Fail;
  }
};

const WalletBody = ({ placeholderText }: WalletBodyProps) => {
  const [transaction, setTransactions] = useState<Transaction[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState("ALL");
  const[balanceSum,setbalanceSum]=useState(0)

  useEffect(() => {
    fetchTransactions().then((response)=>{
         setTransactions(response);
        
     }).catch((error) => {
     console.log(error);
   });  
   fetchWallet("1")
   .then((res) => {
     setbalanceSum(res.balance);
   })
   .catch((error) => {
     console.log(error);
   });
}, []);

  const menuList = ["1H", "24H", "1W", "1M", "1Y", "ALL"];


  const handleDropdownChange = (value: string) => {
    setSelectedPeriod(value);
  };
  
  const filteredTransactions = transaction.filter((data) => {
    
    const transactionDateTime = new Date(data.date);

    switch (selectedPeriod) {
      case "1H":
        return transactionDateTime.getTime() > Date.now() - 60 * 60 * 1000; 
      case "24H":
        return transactionDateTime.getTime() > Date.now() - 24 * 60 * 60 * 1000; 
      case "1W":
        return transactionDateTime.getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000; 
      case "1M":
        return transactionDateTime.getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000; 
      case "1Y":
        return transactionDateTime.getTime() > Date.now() - 365 * 24 * 60 * 60 * 1000; 
      default:
        return true; 
    }
  });

  return (
    <Box data-testid="walletBody" > 
      <StyledGridHeader>
        <StyledBoxUSDCoin>
          <IconComponent src={Doller} />
          <Box>
            <MuiTypography
              data-testid="typography-component"
              variant="h6"
              text="USD Coin"
              sx={{
                color: theme.palette.greyColors.grey500,
              }}
            />
            <MuiTypography
              data-testid="typography-component"
              variant="body1"
              text="Cash"
              sx={{
                color: theme.palette.textColor.mediumEmphasis,
              }}
            />
          </Box>
        </StyledBoxUSDCoin>
        <Box display="flex" gap={"12px"}>
          <ButtonComponent
            variant="outlined"
            text="CASH DEPOSIT"
            sx={{
              background: theme.palette.structural.main,
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "4px",
              color: theme.palette.primary.main,
              height:'42px'
            }}
          />
          <ButtonComponent
            variant="outlined"
            text="WITHDRAWAL"
            sx={{
              background: theme.palette.structural.main,
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "4px",
              color: theme.palette.primary.main,
              height:'42px'
            }}
          />
        </Box>
      </StyledGridHeader>
      <Grid display={"flex"} flexDirection={"column"} paddingTop={"24px"}>
        <StyledMuiTypographyWallet
          data-testid="typography-component"
          variant="subtitle2"
          text="Wallet"
        />
        <StyledBoxTotalBalance>
          <MuiTypography
            data-testid="typography-component"
            text="Total balance"
            variant="subtitle1"
            sx={{ color: theme.palette.textColor.highEmphasis }}
          />
          <MuiTypography
            data-testid="typography-component"
            sx={{ color: theme.palette.textColor.highEmphasis }}
            text={`$ ${balanceSum.toLocaleString('en-US', {maximumFractionDigits:2})}`}
            variant="subtitle1"
          />
        </StyledBoxTotalBalance>

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          padding="24px"
        >
          <SearchField
            placeholder={placeholderText}
            filter={true} 
            backgroundColor={theme.palette.structural.main}
            handleChange={()=> {
            return 
            } }  
          />
          <StyledDropDown
            data-testid="dropDown"
            value={selectedPeriod}
            onChange={(e) => handleDropdownChange(e.target.value as string)}
            sx={{
              width: "77px",
              backgroundColor: theme.palette.structural.main,
              marginLeft:"10px"
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
            {menuList.map((menuItem) => (
              <MenuItem key={menuItem} value={menuItem} data-testid={menuItem}>
                <MuiTypography variant="body1" text={menuItem} />
              </MenuItem>
            ))}
          </StyledDropDown>
        </Box>
      </Grid>
      <StyledGridTransactons >
        {filteredTransactions.map((data) => (
          <WalletTransactionTab
            key={data.currencyId}
            currencyLogo={getCurrencyLogo(data.status)}
            currencyName={`Received ${data.symbol.toUpperCase()}`}
            userDescription={`From ${data.transactionPerson}`}
            currency={data.type === "sell" ? `-${data.quantity}` : `+${data.quantity}`}
            marketCap={data.type === "sell" ? `-$${data.price.toFixed(2)}` : `+$${data.price.toFixed(2)}`}
            date={new Date(data.date)}
            chiplabel={data.type === "sell" ? "Sold" : "Purchased"}
            symbol={data.symbol}
          />
        ))}
      </StyledGridTransactons>
    </Box>
  );
};

export default WalletBody;
