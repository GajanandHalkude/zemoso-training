import { Box, Divider, styled } from '@mui/material'
import React from 'react'
import DownTrend from '../../../../public/assets/icons/redDecreasingTrend.svg'
import UpTrend from '../../../../public/assets/icons/greenIncreasingTrend.svg'
import FilledStar from "../../../../public/assets/images/filled-star.svg";
import EmptyStar from "../../../../public/assets/images/empty-star.svg";
import { compactFormat } from "../../../constants"
import theme from '../../../theme'
import MuiTypography from '../../atoms/typography'
import IconComponent from '../../atoms/icon'
import IconWithTypography from '../../molecules/IconWithTypography'
import ButtonComponent from '../../atoms/button'

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '33px',
}))
const StyledWholeBox = styled(Box)({
    color: theme.palette.structural.main,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 24px",
    background: theme.palette.structural.main,
    border: `1px solid ${theme.palette.greyColors.grey100}`,
    borderRadius: "4px",
  });
  

const StyledInnerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}))
const StyledPercentageBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap:'5px'
}))

const StyledBoxForInfo = styled(Box)(() => ({
  gap: '4px',
  display: 'flex',
  flexDirection: 'column',
}))

interface CurrencyDetailCardProps {
  coinIcon: string
  coinName: string
  coinSymbol: string
  percentageChange: number
  isAddedtoWishList: boolean
  marketCap: number
  volumeIn24H: number
  circulatingSupply: number
  handleClickForWatchListButton: (arg: any) => void
}

const WatchListBar = ({coinIcon,
  coinName,
  coinSymbol,
  percentageChange,
  isAddedtoWishList,
  marketCap,
  volumeIn24H,
  circulatingSupply,
  handleClickForWatchListButton}: CurrencyDetailCardProps) => {
  
  const renderTypography = (text: string, value: number) => (
    <StyledBoxForInfo>
      <MuiTypography variant="caption1" color={theme.palette.textColor.mediumEmphasis} text={text} />
      <MuiTypography
        variant="body1"
        color={theme.palette.textColor.highEmphasis}
        text={`$${compactFormat.format(value)}`}
        />
    </StyledBoxForInfo>
  )
  return (
    <div data-testid="currenctDetailCard">
        <StyledWholeBox>
          <StyledBox>
            <IconWithTypography
              image={coinIcon}
              imageHeight="56px"
              imageWidth="56px"
              text={coinName}
              textVariant={'h6'}
              textColor={theme.palette.greyColors.grey500}
              gapBetweenText="2px"
              subText={ <StyledPercentageBox>
                <MuiTypography variant="body1" color={theme.palette.textColor.mediumEmphasis} text={coinSymbol} />
                <IconWithTypography 
                  image={percentageChange >= 0 ? UpTrend : DownTrend} 
                  imageHeight='9px' 
                  imageWidth='9px' 
                  text={`${percentageChange >= 0 ? '+' : ''}${percentageChange}%`} 
                  textVariant='overline' 
                  textColor={percentageChange >= 0 ? theme.palette.primary.success500 : theme.palette.loss.borderColor} 
                  />
              </StyledPercentageBox>}
            />
            <StyledInnerBox height={'45px'}>
              <Divider orientation="vertical" color={theme.palette.greyColors.grey300}></Divider>
            </StyledInnerBox>
            <StyledInnerBox gap="22px">
              {renderTypography('Market Cap', marketCap)}
              {renderTypography('Vol.24H', volumeIn24H)}
              {renderTypography('Circulating Supply', circulatingSupply)}
            </StyledInnerBox>
          </StyledBox>
          <StyledBox>
            <ButtonComponent
              sx={{ height: '42px' }}
              startIcon={
                <IconComponent
                  src={isAddedtoWishList ? FilledStar : EmptyStar}
                />}
              variant="outlined"
              text={isAddedtoWishList ? 'ADDED TO WATCHLIST' : 'ADD TO WATCHLIST'}
              onClick={handleClickForWatchListButton}
            />
          </StyledBox>
        </StyledWholeBox>
    </div>
  )
}

export default WatchListBar
