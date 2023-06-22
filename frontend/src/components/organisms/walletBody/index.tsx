import React from "react";
import Doller from '../../../../public/assets/images/doller.svg'
import IconComponent from "../../atoms/icon";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme";
import ButtonComponent from "../../atoms/button";
import SearchField from "../../molecules/SearchFilter";
import Corrected from "../../../../public/assets/icons/Correct.svg"
import { WalletBodyData } from "../../../constants";
import WalletTransactionTab from "../../molecules/walletTransactionTab";
import { Box, Grid, styled, MenuItem, Select, } from "@mui/material";

export interface WalletBodyProps {
    TotalBalance: number,
    placeholderText:string,
    handleSearchFilter?: () => void;
  handleDropdownChange?: (value: any) => void;
}
const StyledBoxUSDCoin = styled(Box)({

    display: "flex",
    flexDirection: "row",
    gap: "10px",
});

const StyledGridTransactons = styled(Grid)({
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { width: '0.3rem' },
    '&::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.structural.main,
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.greyColors.grey300,
        borderRadius: '10px',
    },
    paddingRight: '0.6rem',

    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 0px 24px 24px',
    gap: '12px',
    height: '566px',
    background: '#FFFFFF',
    border: '1px solid #E8E8F7',
    borderRadius: '0px 0px 4px 4px',
})

const StyledBoxTotalBalance = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    gap: '10px',
    height: '60px',
    background: '#F2F2F7',
    borderRadius: '4px',
})


const StyledGridHeader = styled(Grid)({
    background: theme.palette.structural.main,
    border: `1px solid ${theme.palette.greyColors.grey100}`,
    borderRadius: '4px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px',
    gap: '10px',

    height: '104px',
});

const StyledMuiTypographyWallet = styled(MuiTypography)({
   
    height: '28px',
    color: theme.palette.textColor.highEmphasis,
})
const StyledDropDown = styled(Select)(() => ({
    '& .MuiSelect-select': {
      height: '22px',
      padding: '9px 0 8px 4px !important',
    },
    '& .MuiTypography-root': {
      paddingLeft: '8px !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.palette.greyColors.grey100} !important`,
      padding: '0px',
    },
    input: {
      '&::placeholder': {
        padding: '0px !important',
        color: 'textColor.main',
        fontFace: 'body2',
      },
    },
  }))
 

const WalletBody = ({ TotalBalance,placeholderText }: WalletBodyProps) => {
    const handleSearchFilter = function (): void {
        throw new Error("Function not implemented.");
    }

const menuList = ["1H","24H","1W","1M","1Y","ALL"]
const handleDropdownChange = (value: any) => {
    console.log(value)
  };
    return (
        <Box>
            <StyledGridHeader >
                <StyledBoxUSDCoin>
                    <IconComponent src={Doller}  />
                    <Box>
                        <MuiTypography data-testid="typography-component"
                            variant="h6"
                            text="USD Coin"
                            sx={{
                                color: theme.palette.greyColors.grey500,
                            }}
                        />
                        <MuiTypography data-testid="typography-component"
                            variant="body1"
                            text="Cash"
                            sx={{
                                color: theme.palette.textColor.mediumEmphasis,
                            }}
                        />
                    </Box>
                </StyledBoxUSDCoin>
                <Box display='flex' gap={'12px'}>
                    <ButtonComponent variant='outlined' text='CASH DEPOSIT'
                    sx={{background: theme.palette.structural.main,
                        border: `1px solid ${theme.palette.primary.main}`,
                        borderRadius: '4px',color:theme.palette.primary.main}}/>
                    <ButtonComponent variant='outlined' text='WITHDRAWAL' 
                    sx={{background: theme.palette.structural.main,
                        border: `1px solid ${theme.palette.primary.main}`,
                        borderRadius: '4px',color:theme.palette.primary.main}}/>
                </Box>
            </StyledGridHeader>
            <Grid display={'flex'} flexDirection={'column'} paddingTop={'24px'}> 
                <StyledMuiTypographyWallet data-testid="typography-component" variant='subtitle2' text='Wallet'/>
                <StyledBoxTotalBalance>
                    <MuiTypography data-testid="typography-component" text='Total balance'
                    variant="subtitle1"
                    sx={{color: theme.palette.textColor.highEmphasis}}
                    />
                    <MuiTypography data-testid="typography-component" 
                    sx={{color: theme.palette.textColor.highEmphasis}} 
                    text={`$ ${TotalBalance}`}
                    variant='subtitle1' />
                </StyledBoxTotalBalance>

                <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'} padding='24px'>
                    <SearchField placeholder={placeholderText} filter={true} handleChange={handleSearchFilter}/>
                <StyledDropDown
                    data-testid="dropDown"
                    defaultValue={menuList[0]}
                    onChange={(e) => handleDropdownChange(e.target.value)}
                    sx={{ width: '77px', backgroundColor: theme.palette.structural.main }}

                    MenuProps={{
                        anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                        },
                        transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                        },
                    }}
                    >
                    {menuList.map((menuItem) => (
                        <MenuItem key={menuItem} value={menuItem} data-testid={menuItem}>
                        <MuiTypography variant="body1" text={menuItem}/>
                        </MenuItem>
                    ))}
                </StyledDropDown>
                </Box>
            </Grid>
            <StyledGridTransactons container>
            { WalletBodyData.map((data) =>
                {
                    return (
                        <WalletTransactionTab key={data.coinName}
                        currencyLogo={Corrected} 
                        currencyName={`Received ${data.coinName}`} 
                        userDescription={`from ${data.TraderName}`}
                        currency={data.QuantityOfCoin}
                        marketCap={data.Amount} 
                        date={data.date} 
                        chiplabel={data.Trade} />
           ) })}
            </StyledGridTransactons>
        </Box>
    )
}
export default WalletBody
