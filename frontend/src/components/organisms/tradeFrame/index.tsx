/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import TradeTab from '../../molecules/tradeTab';
import { MuiTypography, pictures } from '../../../constants';
import { Box, Button, IconButton, InputAdornment, TextField, styled } from '@mui/material';
import theme from '../../../theme';
import TabsComponent from '../../molecules/Tabs';
import SearchIcon from '@mui/icons-material/Search';
import IconComponent from '../../atoms/icon';
import DropDown from '../../../../public/assets/icons/dropdown.svg';
import DropDown24 from '../../../../public/assets/icons/dropdown24.svg';
import Filledstar from "../../../../public/assets/images/filled-star.svg";
import Emptystar from "../../../../public/assets/images/watchlistEmptystar.svg";
import Switch from "../../../../public/assets/icons/switch.svg";
import { addWatchList, fetchAllCrtptoCurrenices, fetchWatchList, removeWatchList } from '../../../services';
import { useNavigate } from 'react-router-dom';

const StyledBox = styled(Box)({
  color: theme.palette.structural.main,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 18px',
  borderRadius: '4px',
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    height: "40px",
    paddingRight: "5px",
    borderRadius: "4px",
    "&:hover fieldset": {
      border: `1px solid ${theme.palette.greyColors.grey100}`,
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.greyColors.grey100} !important`,
    padding: "0px",
  },
  input: {
    "&::placeholder": {
      color: theme.palette.textColor.main,
      fontFace: theme.typography.body2,
    },
  },
  variant: "outlined",
  width: "230px",
  height: "40px",
  background: theme.palette.structural.main,
});
const StyledIconButton = styled(IconButton)({
  padding: '0px 0px 6px 0px',
  height: '10px',
  width: '13px',
})
const StyledIconComponent = styled(IconComponent)({
  paddingBottom: '18px',
})

const TradeFrame = () => {
  const [searchData, setSearchData] = useState('');
  const [currency, setCurrency] = useState<any[]>([]);
  const [watchList, setWatchList] = useState<any[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('descending')

  function getCurrency() {
    fetchAllCrtptoCurrenices()
      .then((res) => {
        setCurrency(res)
      })
  }
  function getWatchlist() {
    fetchWatchList()
    .then((res) => {
      setWatchList(res)
    })
  }
  useEffect(() => {
    getCurrency();
    getWatchlist();
  },[])
  const filteredCurrency = currency
  .filter((data) =>
    data.name.toLowerCase().includes(searchData.toLowerCase())
  )
  .filter((data) =>
    watchList.some((item) => item.id === data.id)
  )
  .sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.marketCap - b.marketCap;
    } else {
      return b.marketCap - a.marketCap;
    }
  });

  const handleSearchFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };
  const filteredData = currency
  .filter((data) =>
    data.name.toLowerCase().includes(searchData.toLowerCase())
  )
  .sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.marketCap - b.marketCap;
    } else {
      return b.marketCap - a.marketCap;
    }
  });
  const handleStarClick = (id: string) => {
    const updatedWatchList = [...watchList];
    const coinIndex = updatedWatchList.findIndex((item) => item.id === id);
    if (coinIndex !== -1) {
      updatedWatchList.splice(coinIndex, 1);
      setWatchList(updatedWatchList);
      removeWatchList(id);
    } else {
      addWatchList(id)
        .then(() => {
          setWatchList([...updatedWatchList, { id: id }]);
        })
        .catch((error) => {
          console.error("Failed to add coin to watchlist", error);
        });
    }
  };

  function handleMarketCapClick(): void {
    setSortOrder((prevSortOrder) => prevSortOrder === 'ascending' ? 'descending' : 'ascending');
  }
  const navigate = useNavigate();

  return (
    <Box data-testid="trade-frame" paddingTop={'12px'}>
      <Box display='flex' justifyContent={'space-between'} sx={{ width: '91vw' }}>
        <Box data-testid="tabs-component" sx={{ width: '91vw' }} >
          <TabsComponent
            label1={'All Assets'}
            label2={'Watchlists'}
            width='66%'
            body1={<Box id='1' data-testid="assests" sx={{ width: '91vw' }} minHeight={'600px'}>
                <StyledBox>
                  <MuiTypography sx={{ minWidth: '140px' ,fontSize:"14px"}} color={theme.palette.greyColors.grey500} variant='body1' text='Name' />
                  <MuiTypography sx={{ minWidth: '115px',fontSize:"14px" }} color={theme.palette.greyColors.grey500} variant='body1' text='Price' />
                  <MuiTypography color={theme.palette.greyColors.grey500} variant='body1' text='Change' sx={{ fontSize:"14px"}}/>
                  <Box display={'flex'} flexDirection={'row'} gap={'12px'} alignItems={'center'} minWidth={'130px'}>
                  <MuiTypography color={theme.palette.greyColors.grey500} variant='body1' text='Market Cap' sx={{ fontSize:"14px"}}/>
                      <StyledIconButton
                      onClick={() => handleMarketCapClick()}
                      data-testid="market-cap-button"
                      >
                      <StyledIconComponent src={Switch} width={'13px'} height={'10px'} />
                    </StyledIconButton>
                  </Box>
                  <MuiTypography color={theme.palette.greyColors.grey500} variant='body1' text='Watch' sx={{ fontSize:"14px"}}/>
                </StyledBox>
                <Box>
                  {filteredData.map((data) => {
                    const isStarFilled = watchList.some((item) => item.id === data.id);
                    return (
                      <TradeTab
                        key={data.id}
                        icon={pictures[data.icon]}
                        cryptoCoinName={data.name}
                        shortNameOfCoin={data.symbol.toUpperCase()}
                        change={data.priceChange}
                        price={data.price}
                        marketCap={data.marketCap}
                        onClick={() => navigate("/currencydetails", {
                          state: { coindId: data.id }
                        })}
                        button={
                          <Button data-testid="selected-watch" key={data.id} onClick={() => handleStarClick(data.id)}>
                            <IconComponent src={isStarFilled ? Filledstar : Emptystar} />
                          </Button>
                        }
                      />
                    );
                  })}
                </Box>
              </Box>}
            body2={<Box id='2' data-testid="watchlist" sx={{ width: '91vw' }} minHeight={'600px'}>
               <StyledBox>
                  <MuiTypography color={theme.palette.greyColors.grey500} sx={{ minWidth: '140px' ,fontSize:"14px"}} variant='body1' text='Name' />
                  <MuiTypography sx={{ minWidth: '115px',fontSize:"14px" }} variant='body1' text='Price' color={theme.palette.greyColors.grey500}  />
                  <MuiTypography color={theme.palette.greyColors.grey500} sx={{ fontSize:"14px"}}  variant='body1' text='Change'/>
                  <Box display={'flex'}  gap={'12px'} alignItems={'center'} minWidth={'130px'} flexDirection={'row'}>
                  <MuiTypography sx={{ fontSize:"14px"}} color={theme.palette.greyColors.grey500} variant='body1' text='Market Cap' />
                      <StyledIconButton
                      onClick={() => handleMarketCapClick()}
                      data-testid="market-cap-button"
                      >
                      <StyledIconComponent height={'10px'} src={Switch} width={'13px'} />
                    </StyledIconButton>
                  </Box>
                  <MuiTypography variant='body1'   color={theme.palette.greyColors.grey500} text='Watch' sx={{ fontSize:"14px"}} />
                </StyledBox>
                {filteredCurrency.map((data) => (
                  <TradeTab
                    key={data.id}
                    icon={pictures[data.icon]}
                    cryptoCoinName={data.name}
                    shortNameOfCoin={data.symbol.toUpperCase()}
                    change={data.priceChange}
                    price={data.price}
                    marketCap={data.marketCap} 
                    onClick={() => navigate("/currencydetails")}
                    button={<Button data-testid="unselected-watch" key={data.id} onClick={() => handleStarClick(data.id)}>
                            <IconComponent src={Filledstar} />
                          </Button>}        
                    />
                ))}
              </Box>}
          />
          </Box>
        <Box display={'flex'} marginLeft={'-500px'} gap={'12px'}>
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