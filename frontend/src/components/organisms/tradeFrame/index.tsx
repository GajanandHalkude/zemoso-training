import React, { useState } from 'react';
import TradeTab from '../../molecules/tradeTab';
import { MuiTypography, TradeFrameData } from '../../../constants';
import { Box, InputAdornment, TextField, styled } from '@mui/material';
import theme from '../../../theme';
import TabsComponent from '../../molecules/Tabs';
import SearchIcon from '@mui/icons-material/Search';
import IconComponent from '../../atoms/icon';
import DropDown from '../../../../public/assets/icons/dropdown.svg';
import DropDown24 from '../../../../public/assets/icons/dropdown24.svg';

const StyledBox = styled(Box)({
  color: theme.palette.structural.main,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 24px',
  background: theme.palette.structural.main,
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '4px',
  maxWidth: '1239x',
});

const StyledTextField = styled(TextField)({
  variant: 'outlined',
  width: '230px',
  height: '40px',
  background: theme.palette.structural.main,
  border: '1px solid #E8E8F7',
  borderRadius: '4px',
});

interface AllAssetsProps {
  filteredData: Array<{
    icon: string;
    coinName: string;
    shortName: string;
    change: number;
    price: number;
    marketcap: number;
    star: boolean;
  }>;
}

interface WatchlistProps {
  starredData: Array<{
    icon: string;
    coinName: string;
    shortName: string;
    change: number;
    price: number;
    marketcap: number;
    star: boolean;
  }>;
}

const AllAssets: React.FC<AllAssetsProps> = ({ filteredData }) => {
  return (
    <Box id='1' data-testid="assests" sx={{ width: '95vw' }}>
      <StyledBox>
        <MuiTypography sx={{ minWidth: '150px' }} color={theme.palette.greyColors.grey500} variant='caption1' text='Name' />
        <MuiTypography sx={{ minWidth: '125px' }} color={theme.palette.greyColors.grey500} variant='caption1' text='Price' />
        <MuiTypography sx={{ minWidth: '70px' }} color={theme.palette.greyColors.grey500} variant='caption1' text='Change' />
        <MuiTypography sx={{ minWidth: '170px' }} color={theme.palette.greyColors.grey500} variant='caption1' text='Market Cap' />
        <MuiTypography color={theme.palette.greyColors.grey500} variant='caption1' text='Watch' />
      </StyledBox>

      {filteredData.map((data) => (
        <TradeTab
          key={data.icon}
          icon={data.icon}
          cryptoCoinName={data.coinName}
          shortNameOfCoin={data.shortName}
          change={data.change}
          price={data.price}
          marketCap={data.marketcap}
          isStarFilled={data.star}
        />
      ))}
    </Box>
  );
};

const Watchlist: React.FC<WatchlistProps> = ({ starredData }) => {
  return (
    <Box id='2' data-testid="watchlist" sx={{ width: '95vw' }}>
      <StyledBox>
        <MuiTypography sx={{ minWidth: '150px' }} color={theme.palette.greyColors.grey500} variant='caption1' text='Name' />
        <MuiTypography sx={{ minWidth: '125px' }} color={theme.palette.greyColors.grey500} variant='caption1' text='Price' />
        <MuiTypography sx={{ minWidth: '70px' }} color={theme.palette.greyColors.grey500} variant='caption1' text='Change' />
        <MuiTypography sx={{ minWidth: '170px' }} color={theme.palette.greyColors.grey500} variant='caption1' text='Market Cap' />
        <MuiTypography color={theme.palette.greyColors.grey500} variant='caption1' text='Watch' />
      </StyledBox>
      {starredData.map((data) => (
        <TradeTab
          key={data.icon}
          icon={data.icon}
          cryptoCoinName={data.coinName}
          shortNameOfCoin={data.shortName}
          change={data.change}
          price={data.price}
          marketCap={data.marketcap}
          isStarFilled={data.star}
        />
      ))}
    </Box>
  );
};

const TradeFrame = () => {
  const [searchData, setSearchData] = useState('');

  const handleSearchFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  const filteredData = TradeFrameData.filter((data) =>
    data.coinName.toLowerCase().includes(searchData.toLowerCase())
  );

  const StarredData = TradeFrameData.filter((data) => data.star === true);

  const filterStarredData = StarredData.filter((data) =>
    data.coinName.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <Box data-testid="trade-frame" sx={{ width: '95vw' }}>
      <Box display='flex' justifyContent={'space-between'}>
        <Box>
          <TabsComponent
            label1={'All Assets'}
            label2={'Watchlists'}
            body1={<AllAssets filteredData={filteredData} />}
            body2={<Watchlist starredData={filterStarredData} />}
          />
        </Box>
        <Box display={'flex'} gap={'12px'} sx={{ transform: 'translateX(-100%)' }}>
          <StyledTextField
            placeholder={'Search all assets'}
            onChange={handleSearchFilterChange}
            size='small'
            InputProps={{
              endAdornment: <InputAdornment position='end'><SearchIcon /></InputAdornment>
            }}
          />
          <IconComponent src={DropDown24} />
          <IconComponent src={DropDown} />
        </Box>
      </Box>
    </Box>
  );
};

export default TradeFrame;