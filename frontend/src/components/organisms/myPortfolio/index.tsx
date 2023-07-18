import React from "react";
import PortfolioTab from "../../molecules/portfolioTab";
import { Divider, Grid, Typography, styled } from "@mui/material";
import MuiTypography from "../../atoms/typography";
import IconComponent from "../../atoms/icon";
import Chart from "../../../../public/assets/icons/chart.svg"
import List from "../../../../public/assets/icons/list.svg"
import { pictures } from "../../../constants";
import theme from "../../../theme";
import { usePortfolioCoinsandWalletHook } from "../../pages/dashBoard/hooks";

const StyledGrid = styled(Grid)({
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
})

const StyledDivider = styled(Divider)({
    color: theme.palette.greyColors.grey100,
    borderWidth: '1px',
})

const StyledGridHeader = styled(Grid)({
    display:'flex' ,
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'20px'
})

const MyPortfolioOrg = ()=>
{
    const { portfolioCoins } = usePortfolioCoinsandWalletHook();
      let sum = 0
      portfolioCoins.forEach((coin) => {
        sum = sum + coin.investedAmount
      })

    return (
        <Grid container
                direction={'column'}
                width={'inherit'}
                padding="0.1rem"
                display="flex"
                gap={0}
                sx={{paddingLeft:'0.1rem'}}> 
            <Grid item>
                <StyledGridHeader data-testid="styled-grid-header">
                    <Grid item>
                        <MuiTypography  variant="body1" fontWeight='bold' text="My portfolio" sx={{fontSize:'16px'}}></MuiTypography>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'} gap={1}>
                        <Grid item>
                            <IconComponent src={Chart} width={'19.95px'} height={'19.95px'}></IconComponent>
                        </Grid>
                        <Grid item>
                            <IconComponent src={List} width={'18px'} height={'17px'}></IconComponent>
                        </Grid>
                    </Grid>
                </StyledGridHeader>
            </Grid>
            <StyledGrid gap={3} data-testid="styled-grid" maxHeight="12rem" item>
                {portfolioCoins.map((data) => {
                const symbol = data.symbol ? data.symbol.toUpperCase() : '';
                console.log(data.investedAmount)
                return (
                    <Grid key={data.id}>
                    <PortfolioTab
                        icon={pictures[data.image]}
                        cryptoCoinName={data.name}
                        shortNameOfCoin={symbol}
                        value={data.investedAmount.toFixed(2)}
                        totalPercentage={data.change}
                    />
                    </Grid>
                );
                })}
            </StyledGrid>
            <Grid item paddingTop={'12px'}> 
            <StyledDivider data-testid="styled-divider"/>
                <Grid container display={'flex'}
                        justifyContent="space-between"
                        paddingTop={3}
                        paddingBottom={3}
                        paddingLeft={3}
                        >
                    <Grid item>
                        <MuiTypography variant="body1" fontWeight={'bold'} color={theme.palette.textColor.mediumEmphasis} text="Total Balance" ></MuiTypography>
                    </Grid>
                    <StyledGrid>
                        <Typography variant="body1"> ${sum.toFixed(2)}</Typography>
                    </StyledGrid>
                </Grid>
                <StyledDivider data-testid="styled-divider"/>
            </Grid>
        </Grid>
    )

 }
export default MyPortfolioOrg