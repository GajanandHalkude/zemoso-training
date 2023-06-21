/* eslint-disable @typescript-eslint/no-empty-function */
import { Box, MenuItem, Select, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import TabsComponent from '../../molecules/Tabs';
import PortfolioGraphComponent from '../PortfolioGraph';
import MuiTypography from '../../atoms/typography';
import SearchField from '../../molecules/SearchFilter';
import CurrencyDetailsBanner from '../../molecules/currencyDetailsBanner';
import { BitcoinTransactionValues, BitcoinWatchListBar, GraphData, GraphData1, Graphcategories, formatCurrency, timeLineValues } from '../../../constants';
import WalletTransactionTab from '../../molecules/walletTransactionTab';
import Success from '../../../../public/assets/icons/Correct.svg';
import Fail from '../../../../public/assets/images/t-fail.svg';
import Pending from '../../../../public/assets/images/t-pending.svg';
import WatchListBar from '../watchListBar';

const TotalBalanceBox = styled(Box)(() => ({
  backgroundColor: theme.palette.greyColors.grey50,
  display: 'flex',
  padding: '16px 24px',
  gap: '10px',
}));

const SearchBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
}));

const Tab1Styles = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

interface TabsProps {
  coinBalance: number;
  currentValue: number;
}

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
}));

const StyledGridTransactions = styled(Box)({
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
  alignItems: 'flex-start',
  padding: '18px 0px ',
  gap: '12px',
  height: '566px',
  background: theme.palette.structural.main,
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '4px',
});
const getCurrencyLogo = (status: string) => {
  if (status === 'success') {
    return Success;
  } else if (status === 'pending') {
    return Pending;
  } else {
    return Fail;
  }
};

const DetailsScrennBody = ({ coinBalance, currentValue }: TabsProps) => {

  return (
    <Tab1Styles data-testid="detailsScreen">
      {BitcoinWatchListBar.map((data) => (
        <WatchListBar
          key={data.id}
          coinIcon={data.coinIcon}
          coinName={data.coinName}
          coinSymbol={data.coinSymbol}
          percentageChange={data.percentageChange}
          isAddedtoWishList={data.isAddedtoWishList}
          marketCap={data.marketCap}
          volumeIn24H={data.volumeIn24H}
          circulatingSupply={data.circulatingSupply}
          handleClickForWatchListButton={() => {}}
        />
      ))}
      <TabsComponent
        label1="Overview"
        label2="Wallet"
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
              data={GraphData}
              data2={GraphData1}
              investmentValue={1000002}
              typeOfInvestment="Current value"
              percentChange={+1.2}
              investmentValue2={34000}
              percentChange2={-1.2}
              typeOfInvestment2="Bitcoin"
            />
            <CurrencyDetailsBanner aboutCurrency="About Bitcoin" />
          </Tab1Styles>
        }
        body2={
          <Box display="flex" gap="12px" flexDirection="column" data-testid="body2">
            <TotalBalanceBox>
              <MuiTypography
                variant="subtitle1"
                color="textColor.highEmphasis"
                text="Total Balance"
              />
              <MuiTypography
                variant="subtitle1"
                color="textColor.highEmphasis"
                data-testid="transaction-balance"
                text={`${coinBalance} BTC (${formatCurrency.format(
                  currentValue * coinBalance
                )})`}
              />
            </TotalBalanceBox>
            <SearchBox>
              <SearchField
                placeholder="Search all assets"
                filter={true}
                handleChange={() => {}}
              />
              <StyledDropDown
                data-testid="dropDown"
                defaultValue={timeLineValues[0]}
                onChange={(e) => (e.target.value)}
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
                {timeLineValues.map((menuItem) => (
                  <MenuItem key={menuItem} value={menuItem} data-testid={menuItem}>
                    <MuiTypography variant="body1" text={menuItem} />
                  </MenuItem>
                ))}
              </StyledDropDown>
            </SearchBox>
            <StyledGridTransactions>
              {BitcoinTransactionValues.map((data) => (
                <WalletTransactionTab
                  key={data.id}
                  currencyLogo={getCurrencyLogo(data.status)}
                  currencyName={`Received ${data.name}`}
                  userDescription={`from ${data.from}`}
                  currency={data.btcPrice}
                  marketCap={data.dollarPrice}
                  date={data.date}
                  chiplabel={data.label}
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
