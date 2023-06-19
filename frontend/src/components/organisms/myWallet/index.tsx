import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import MuiTypography from '../../atoms/typography'
import theme from '../../../theme/index'
import IconComponent from '../../atoms/icon'

interface PaymentAndDetailsProps {
  variant?: 'payment' | 'balance' | 'deposit' | 'wallet'
  title: string
  icon: string
  coinType?: string
  balance?: number
  coinSymbol?: string
  wallet:boolean,
  walletName?:string
}

const StyledGrid = styled(Grid)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '4px',
  background: theme.palette.structural.main,
})

const PaymentAndDetailsCard = ({variant, title, icon, coinType, balance, coinSymbol,wallet,walletName}: PaymentAndDetailsProps) => {
  return (
    <Box>
      {wallet ? (
      <StyledGrid
        container
        direction={'column'}
        display="flex"
        gap={1.5}
        padding="24px">
        <Grid item>
          <MuiTypography variant="body1" text={title} />
        </Grid>
        <Grid item>
          <StyledGrid
            padding={'15px'}
            container
            display={'flex'}
            direction={'row'}
            justifyContent="space-between"
            alignItems={'center'}
          >
            <Grid item>
              <Grid
                container
                direction={'row'}
                display="flex"
                alignItems={'center'}
                gap={2}
              >
                <Grid item>
                  <IconComponent src={icon} />
                </Grid>
                <Grid item>
                  {variant === 'payment' && (
                    <Grid container direction={'column'} gap={0.5}>
                      <Grid item>
                        <MuiTypography variant="caption1" text={coinType} />
                      </Grid>
                      <Grid item>
                        <MuiTypography variant="subtitle1" text={`Total balance: $${balance}`} color={theme.palette.textColor.mediumEmphasis}/>
                      </Grid>
                    </Grid>
                  )}
                  {(variant === 'deposit' || variant === 'balance') && (
                    <MuiTypography variant="caption1" text={coinType} />
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {(variant === 'deposit' || variant === 'payment') && (
                <MuiTypography variant="caption1" color={theme.palette.textColor.mediumEmphasis} text="Default"/>
              )}
              {variant === 'balance' && (
                <MuiTypography variant="subtitle1" text={`${balance} ${coinSymbol}`}/>
              )}
            </Grid>
          </StyledGrid>
        </Grid>
      </StyledGrid>
        ) : 
        ( <Grid direction={'column'}
            display="flex"
            gap={1.5}
            padding="8px">
            <Grid item>
                <MuiTypography variant="subtitle1" text={title} color={theme.palette.textColor.highEmphasis} />
            </Grid>
            <Grid  
            container
            display={'flex'}
            direction={'row'}
            alignItems={'center'}
            gap={'133px'}>
                <Grid item>
                    <Grid
                    container
                    direction={'row'}
                    display="flex"
                    alignItems={'center'}
                    gap={2}
                    >
                    <Grid item>
                      <IconComponent src={icon} />
                    </Grid>
                    <Grid item>
                        <Grid container direction={'column'} gap={0.5}>
                            <Grid item>
                              <MuiTypography variant="body1" text={coinType} color={theme.palette.textColor.highEmphasis} />
                            </Grid>
                            <Grid item>
                              <MuiTypography variant="caption2" text={walletName} color={theme.palette.textColor.mediumEmphasis}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item>
                <MuiTypography variant="body1" text={`$${balance}`} color={theme.palette.textColor.highEmphasis}/>
                </Grid>
            </Grid>
        </Grid>)
        }
    </Box>
  )
}

export default PaymentAndDetailsCard
