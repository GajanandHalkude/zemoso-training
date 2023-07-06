import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import MuiTypography from '../../atoms/typography'
import decreasingTrend from '../../../../public/assets/icons/redDecreasingTrend.svg'
import increasingTrend from '../../../../public/assets/icons/greenIncreasingTrend.svg'
import { formatCurrency } from '../../../constants'
import IconWithTypography from '../IconWithTypography'
import theme from '../../../theme'

interface PortfolioValueTypographyProps {
  isInDashBoardPage: boolean
  typeOfInvestment: string
  investmentValue: number
  percentChange: number
  width: string
}

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
}))

const StyledInnerBox = styled(Box)(() => ({
  height: '24px',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  maxWidth: '70px',
  gap: '7.5px',
}))

const PortfolioValueComponent = ({investmentValue,
  percentChange,
  width,
  typeOfInvestment,
  isInDashBoardPage}: PortfolioValueTypographyProps) => {
  const percentageForamttedString = percentChange.toFixed(1)
  return (
    <StyledGrid
      direction={'column'}
      width={width}
      data-testid="PortfolioValueTypography"
      height={isInDashBoardPage ? '66px' : '80px'}
      gap={isInDashBoardPage ? '8px' : '2px'}
    >
      <Box display={'flex'} alignItems="center" gap={'4px'}>
        <MuiTypography
          variant="body1"
          color={'textColor.mediumEmphasis'}
          className="investment"
          text={typeOfInvestment} 
          sx={{fontSize:"14px"}}
        />
        {isInDashBoardPage && 
        (<StyledInnerBox>
          <IconWithTypography 
            image={percentChange >= 0 ? increasingTrend : decreasingTrend} 
            imageHeight="9px" 
            imageWidth="9px" 
            text={`${percentageForamttedString}%`} 
            textVariant='overline'
            textColor={percentChange >= 0 ? theme.palette.primary.success500 : theme.palette.loss.borderColor} 
          />
        </StyledInnerBox>)}
      </Box>
      <MuiTypography
        variant="h6"
        color={theme.palette.textColor.highEmphasis}
        lineHeight="34px"
        text={formatCurrency.format(investmentValue)}
      />
      {!isInDashBoardPage && 
      <IconWithTypography 
        image={percentChange >= 0 ? increasingTrend : decreasingTrend} 
        imageHeight="9px" 
        imageWidth="9px" 
        text={`${percentageForamttedString}%`} 
        textVariant='body1'
        textColor={percentChange >= 0 ? theme.palette.primary.success500 : theme.palette.loss.borderColor} 
        sx={{fontSize:"14px"}}
      />}
    </StyledGrid>
  )
}
export default PortfolioValueComponent
