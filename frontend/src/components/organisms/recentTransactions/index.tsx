import { Box, Grid, styled } from '@mui/material'
import Success from '../../../../public/assets/images/t-success.svg'
import Failed from '../../../../public/assets/images/t-fail.svg'
import TransactionEmpty from '../../../../public/assets/images/transactionempty.svg'
import MuiTypography from '../../atoms/typography'
import React from 'react'
import IconWithTypography from '../../molecules/IconWithTypography'
import ChipItem from '../../atoms/chip'
import theme from '../../../theme'
import { RECENT_TRANSACTIONS, VIEW_ALL, formatCurrency } from '../../../constants'
import IconComponent from '../../atoms/icon'

interface RecentTransactionsProps {
    id: number
    cryptoId: string
    transactionDateTime: string
    quantity: string
    symbol: string
    transactionType: string
    price: number
    status: string
    remarks: string
}

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '12px',
  minWidth: '418px',
}))

const StyledInnerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '418px',
}))

const StyledTransactionBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width:'100%',
  minWidth: '398px',
}))
const StyledEmptyTransactionBox = styled(Box)(() => ({
    paddingTop:'58px',
  }))
const RightPart = styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    justifyContent:'flex-end'
    })
const TransactionStyle =styled(Box)({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    minWidth: '398px'
})
interface RecentTransactionsComponentProps {
    recentTransactions: RecentTransactionsProps[]
    }

const RecentTransactionsComponent = ({recentTransactions}: RecentTransactionsComponentProps) => {


const getDate=(date: string | number | Date)=>{    
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  const month = formattedDate.split(" ")[0];
  const day = formattedDate.split(" ")[1].replace(",", "");
  
  return `${month} ${day}`

} 
  return (
    <StyledGrid data-testid='recentTransacions'>
      <StyledInnerBox>
        <MuiTypography variant="body1" color={theme.palette.textColor.highEmphasis} text={RECENT_TRANSACTIONS}/>
        <MuiTypography variant="body2" color={theme.palette.primary.main} text={VIEW_ALL}  sx={{fontSize:"14px"}}/>
      </StyledInnerBox>
      {recentTransactions.length === 0 ? (
        <StyledEmptyTransactionBox data-testid='emptyTransacions'>
            <IconComponent src={TransactionEmpty} width='350px' height='105px'  />
        </StyledEmptyTransactionBox>
      ) : (
      recentTransactions.map((transaction,index) => (
        <StyledTransactionBox data-testid={`transaction-${index}`} key={transaction.cryptoId+transaction.transactionDateTime}>
          <MuiTypography
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
            text={getDate(transaction.transactionDateTime)}
            sx={{marginBottom:'8px',fontSize:"14px"}}
          />
          <TransactionStyle>
            <IconWithTypography
                image={transaction.status === 'success' ? Success: Failed}
                imageHeight="44px"
                imageWidth="44px"
                textVariant="body1"
                textColor={theme.palette.textColor.highEmphasis}
                text={transaction.cryptoId}
                subText={
                  <ChipItem
                    label={
                      transaction.transactionType === 'buy'
                        ? 'Purchased'
                        : 'Sold'
                    }
                    chipType="rounded"
                    chipVariant='dark'
                  />
                }
              />
            <RightPart>
                <MuiTypography
                variant="body1"
                text={`${
                    transaction.transactionType === 'buy' ? '+' : '-'
                  }${transaction.quantity} ${
                    transaction.symbol.toUpperCase()
                  }`}
                sx={{ color: theme.palette.textColor.highEmphasis}}
                />
                <MuiTypography
                variant="body2"
                text={`${
                    transaction.transactionType === 'buy' ? '-' : '+'
                  }${formatCurrency.format(transaction.price)}`}
                sx={{ color: theme.palette.textColor.mediumEmphasis,fontSize:"14px"}}
                />
            </RightPart>
        </TransactionStyle>
        </StyledTransactionBox>
      ))
    )}
    </StyledGrid>
  )
}

export default RecentTransactionsComponent
