import React from "react";
import PortfolioTab from "../../molecules/portfolioTab";
import { Divider, Grid, Typography, styled } from "@mui/material";
import MuiTypography from "../../atoms/typography";
import IconComponent from "../../atoms/icon";
import Chart from "../../../../public/assets/icons/chart.svg"
import List from "../../../../public/assets/icons/list.svg"
import { MyPortfolioData } from "../../../constants";
import theme from "../../../theme";

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
        gap:'265px',
        paddingLeft:'24px'

    })

const MyPortfolioOrg = ()=>
{
    
      let sum = 0
      MyPortfolioData.forEach((coin) => {
        sum = sum + coin.value
      })

    return (
        <Grid container
                direction={'column'}
                width={'inherit'}
                padding="0.6rem"
                display="flex"
                gap={0}
                sx={{paddingLeft:'0.6rem', width:'398px'}}> 
            <Grid item>
                <StyledGridHeader data-testid="styled-grid-header">
                    <Grid item>
                        <MuiTypography  variant="body1" fontWeight='bold' text="My portfolio"></MuiTypography>
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

            <StyledGrid gap={3} data-testid="styled-grid"
          maxHeight="9rem" item>
                {MyPortfolioData.map((data)=>(
                    <Grid key={data.icon}>
                        <PortfolioTab
                                icon={data.icon}
                                cryptoCoinName={data.coinName}
                                shortNameOfCoin={data.shortName}
                                value={data.value}
                                totalPercentage={data.percentage}
                            />
                    </Grid>
                ) ) }
            </StyledGrid>
            
                    <Grid item>
                        <StyledDivider data-testid="styled-divider"/>

                        <Grid container display={'flex'}
                                justifyContent="space-between"
                                paddingTop={3}
                                paddingBottom={3}
                                paddingLeft={3}>
                            <Grid item>
                                <MuiTypography variant="body1" fontWeight={'bold'} color={theme.palette.textColor.mediumEmphasis} text="Total Balance" ></MuiTypography>
                            </Grid>
                            <StyledGrid>
                                <Typography variant="body1"> $ {sum}</Typography>
                            </StyledGrid>
                        </Grid>

                        <StyledDivider data-testid="styled-divider"/>
                    </Grid>
        </Grid>
    )

 }
export default MyPortfolioOrg