import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../atoms/typography'
import ChooseCrypto from '../../molecules/ChooseCryptoCard'
import { CHOOSE_CRYPTO, pictures } from '../../../constants'
import theme from '../../../theme'

interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  marketCap: number;
  totalSupply: number;
  availableSupply: number;
  priceChangeIn1hr: number;
  priceChangeIn24hrs: number;
  priceChangeIn1week: number;
  priceChangeIn1month: number;
  priceChangeIn1year: number;
  volume: number;
  isSelected:boolean;
}

const CustomBox = styled(Box)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '4px',
  padding: '20px',
  height: 'auto',
  background: theme.palette.structural.main,
})

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
})

interface ChooseCurrencyProps {
  currenciesData: CryptoCurrency[]
}

const BuyCurrency: React.FC<ChooseCurrencyProps> = ({currenciesData}: ChooseCurrencyProps) => {

  return (
    <CustomBox data-testid="chooseCurrency">
      <Grid container direction={"column"} gap={2} height="100%">
        <Grid item>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
            text={CHOOSE_CRYPTO}
          />
        </Grid>

        <StyledGrid
          item
          container
          maxHeight={"340px"}
          rowSpacing={2}
          columnSpacing={0.5}
        >
          { currenciesData.map((currency) => {
              return (
                <Grid item md={3} key={currency.id}>
                  <ChooseCrypto
                    image={pictures[currency.icon]}
                    name={currency.name}
                    value={currency.price}
                    selected={currency.isSelected}
                  />
                </Grid>
              );
            })}
        </StyledGrid>
      </Grid>
    </CustomBox>
  );
};

export default BuyCurrency
