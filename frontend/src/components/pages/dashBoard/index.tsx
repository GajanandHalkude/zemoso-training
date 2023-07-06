/* eslint-disable react/jsx-key */
import { Box, Container, Grid, Stack, styled } from '@mui/material'
import theme from '../../../theme'
import USDCoin from '../../../../public/assets/icons/rupee.svg'
import Chart from '../../../../public/assets/icons/chart.svg'
import Graph from '../../../../public/assets/icons/graph.svg'
import Partition from '../../../../public/assets/images/partition.svg'
import LeftArrow from '../../../../public/assets/icons/buleLeftArrow.svg'
import GridBlue from '../../../../public/assets/icons/gridBlue.svg'
import List from '../../../../public/assets/icons/list.svg'
import Edit from '../../../../public/assets/icons/blueEdit.svg'
import { useGraphDataHook, usePortfolioCoinsandWalletHook, usePortfolioGraphHook, useRecentTransactionsHook, useWatchlistHook } from './hooks'
import SideNavComponent from '../../molecules/sideNavbar'
import React from 'react'
import DashBoardTemplate from '../../templates/DashBoardTemplate'
import Header from '../../molecules/Header'
import Footer from '../../molecules/footer'
import { formatCurrency, menuItems, pictures } from '../../../constants'
import MuiTypography from '../../atoms/typography'
import IconComponent from '../../atoms/icon'
import CurrencySelection from '../../organisms/CurrencySelection'
import PortfolioFrame from '../../molecules/PortfolioFrame'
import MyPortfolioOrg from '../../organisms/myPortfolio'
import PortfolioGraphComponent from '../../organisms/PortfolioGraph'
import RecentTransactionsComponent from '../../organisms/recentTransactions'
import ImageComponent from '../../atoms/Image'
import WatchlistCard from '../../organisms/WatchList'
import PaymentAndDetailsCard from '../../organisms/myWallet'
import { useNavigate } from 'react-router-dom'

const PortfolioTypographyBox = styled(Grid)({
  paddingBottom: '14px',
})

const LeftContainer = styled(Box)({
  paddingTop: '24px',
  marginRight:'10px'
})
interface StyledBoxProp {
    gap?: string
    cursor?: boolean
}
  
const StyledBox = styled(Box)((props: StyledBoxProp) => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.gap ? props.gap : '12px',
  cursor: props.cursor ? 'pointer' : '',
}))
  
const OuterBox = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  flexBasis: '100%',
  paddingLeft: '0px !important',
  paddingRight: '0px !important',
  paddingBottom: '26px',
})
const StyledGraph = styled("div")({
  ".css-2bwmoi-MuiPaper-root-MuiCard-root": {
      minWidth:'100%'
  }
})

const DashboardPage = () => {
  const {watchlistData} = useWatchlistHook();
  const {totalInvestment, coinInvestment} = usePortfolioGraphHook('bitcoin');
  const {cashWallet} = usePortfolioCoinsandWalletHook();
  const {recentTransactions} = useRecentTransactionsHook();
  const {graphData} = useGraphDataHook('bitcoin')
  const len = watchlistData.length
  const lastIndex = len % 2 === 0 ? len : len - 1
  const navigate = useNavigate();

  return (
    <DashBoardTemplate
      header={<Header pageName="Dashboard" displayButtons={true} />}
      footer={<Footer menuItems={menuItems} buttonLabel='Need Help' />}
      sideNav={<SideNavComponent />}
    >
      <Grid container direction="row">
        <Grid item xs={8} sx={{ paddingRight: '24px' }}>
        <LeftContainer>
        <OuterBox data-testid="watchlist">
            <Grid container>
                <Grid item paddingBottom={'14px'} xs={12}>
                <Grid container direction="row">
                    <Grid item xs={6}>
                    <StyledBox>
                        <MuiTypography text='Watchlist' variant="subtitle1" />
                        <ImageComponent src={Partition} height="auto" width="auto" />
                        <StyledBox gap="9px" cursor={true} data-testid='discover-assets-button'
                            onClick={() => {navigate("/trade")}}>
                            <MuiTypography
                            variant="caption1"
                            style={{
                                color: theme.palette.primary
                                ? theme.palette.primary.primary500
                                : 'red',
                                fontWeight: 500,
                            }}
                            text='Discover assets'
                            />
                            <IconComponent
                            src={LeftArrow}
                            height="9px"
                            width="6px"
                            padding="0 0 1px 0 !important"
                            />
                        </StyledBox>
                    </StyledBox>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent={'end'}>
                    <StyledBox>
                        <StyledBox gap="7px" cursor={true} onClick={() => {navigate("/trade")}}>
                        <MuiTypography
                            text='View Watchlist'
                            variant="caption1"
                            style={{
                            color: theme.palette.primary
                                ? theme.palette.primary.primary500
                                : 'red',
                            fontWeight: 500,
                            }}
                        />
                        <IconComponent src={Edit} height="11px" width="11px" />
                        </StyledBox>
                        <ImageComponent src={Partition} height="auto" width="auto" />
                        <ImageComponent src={GridBlue} height="auto" width="auto" />
                        <IconComponent
                        src={List}
                        height="auto"
                        width="auto"
                        padding="2.5px 0 0 0 !important"
                        />
                    </StyledBox>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                    data-testid="longCard-watchlist"
                >
                    {watchlistData.slice(0, lastIndex).map((value) => {
                    return (
                        <Grid item xs={6} key={value.id} data-testid='watchlist-card'>
                            <WatchlistCard
                            image={pictures[value.image]}
                            name={value.name}
                            change={value.change}
                            profit={value.change >0 ? true : false}
                            price={value.symbol}
                            width='63%'
                            />
                     
                        </Grid>
                    )
                    })}
                    <Grid item xs={12} data-testid='watchlist-card-1'>
                    {len % 2 !== 0 && (
                            <WatchlistCard
                                image={pictures[watchlistData[lastIndex].image]}
                                name={watchlistData[lastIndex].name}
                                change={watchlistData[lastIndex].change}
                                price={watchlistData[lastIndex].symbol}
                                profit={watchlistData[lastIndex].change > 0 ? true : false}
                                width='205%'
                            />
                    )}
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </OuterBox>
        <Box marginTop={'-25px'}>
          <PortfolioTypographyBox container direction="row" marginTop={'20px'}>
            <Grid item xs={6}>
              <MuiTypography
                variant="subtitle1"
                text="My Portfolio"
                color={theme.palette.textColor.highEmphasis}
              />
            </Grid>
            <Grid item xs={6} display="flex" justifyContent={'end'}>
              <Stack direction="row" spacing={'13px'}>
                <IconComponent
                  src={Chart}
                  width={'19.95px'}
                  height={'19.95px'}
                />
                <IconComponent src={Graph} width={'18.71px'} height={'18px'} />
              </Stack>
            </Grid>
          </PortfolioTypographyBox>
          <StyledGraph>
          <PortfolioGraphComponent
            height="246px"
            width="100%"
            borderColor={theme.palette.chipColors.main}
            fillColor={theme.palette.chipColors.main}
            borderColor2={theme.palette.graphColor.borderColor2}
            fillColor2={theme.palette.graphColor.fillColor2}
            categories={[
              'Jun 8',
              'Jun 15',
              'Jun 22',
              'Jun 30',
              'Jul 7',
              'Jul 13',
            ]}
            data={[19418.037989243952,
              19448.14900175761,
              19142.694767392895,
              19758.628039738272,
              19153.039779986986,
              19406.380947809706]}
            data2={graphData}
            investmentValue={totalInvestment.investmentValue}
            percentChange={totalInvestment.percentChange}
            typeOfInvestment={'Total investment'}
            dashboardPage={true}
            investmentValue2={coinInvestment.investmentValue}
            typeOfInvestment2={coinInvestment.typeOfInvestment}
            percentChange2={coinInvestment.percentChange}
            isEmptyState={totalInvestment.investmentValue === 0 ? true : false}
          />
          </StyledGraph>
        </Box>
        {totalInvestment.investmentValue !== 0 && (
          <Box paddingTop={'12px'}>
          <PortfolioFrame mainText="10 coins (3 active)" subText="Click on the currency name below to display it on the graph" />
          <CurrencySelection />
          </Box>
        )}
      </LeftContainer>
        </Grid>
        <Grid item xs={4} display={'flex'} justifyContent={'end'}>
        <Box
        display={'flex'} flexDirection={'column'} gap={'24px'}
        sx={{
          backgroundColor: theme.palette.structural.main,
          paddingLeft: '24px', 
          borderLeft: `1px solid ${theme.palette.greyColors.grey100}`,
        }}
      >
        <MyPortfolioOrg />
        <PaymentAndDetailsCard 
        title={'My Wallets'} 
        icon={USDCoin} 
        wallet={false}
        coinType='USD Coin'
        balance={formatCurrency.format(cashWallet)}
        walletName='US Dollar'
         />
         <Box marginLeft={'10px'}> 
        <RecentTransactionsComponent
          recentTransactions={recentTransactions}
        />
        </Box>
      </Box>
        </Grid>
      </Grid>
    </DashBoardTemplate>
  )
}

export default DashboardPage
