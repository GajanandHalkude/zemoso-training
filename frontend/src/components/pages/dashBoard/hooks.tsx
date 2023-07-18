/* eslint-disable prefer-const */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { url } from '../../../constants'
import { getHeader } from '../../../services/Headers'
interface WatchlistDataProps {
    id: string
    image: string
    name: string
    symbol: string
    change: number
  }
 interface DashboardPortfolioProps {
    typeOfInvestment: string
    percentChange: number
    investmentValue: number
  }
 interface PortfolioCoinProps extends WatchlistDataProps {
    investedAmount: number
  }
 interface TransactionsProps {
    id: number
    currencyId: string
    date: Date,
    quantity: string
    symbol: string
    type: string
    price: number
    status: string
  }
export const useWatchlistHook = () => {
  const [watchlistData, setWatchlistData] = useState<WatchlistDataProps[]>([])

  const setData = async () => {
    try {
      const headers = getHeader();
  const watchlistResponse = await axios.get(`${url}/users/1/watchlist`,{headers});
  const watchlistData = watchlistResponse.data.map((value:string) => ({
    id:value
  }));
  const newCoins: WatchlistDataProps[] = [];
  
  const coinDataPromises = watchlistData.map(async (coinData: any) => {
    try {
      const response = await axios.get(`${url}/currency/${coinData.id}`);
      const cryptoData = response.data;
      const tempWatchData = {
        id: cryptoData.id,
        image: cryptoData.icon,
        name: cryptoData.name,
        symbol: cryptoData.price,
        change: cryptoData.priceChange,
      };
      return tempWatchData;
    }catch (error) {
      return null; 
    }
   
  });
  

  const coinDataArray = await Promise.all(coinDataPromises);
  const filteredCoinDataArray = coinDataArray.filter((coinData) => coinData !== null);
  newCoins.push(...filteredCoinDataArray);
  setWatchlistData(newCoins);
  
} catch{}
}

  useEffect(() => {
    setData()
  }, [])

  return { watchlistData, setWatchlistData }
}

export const usePortfolioGraphHook = (coin: string) => {
  const [totalInvestment, setTotalInvestment] =
    useState<DashboardPortfolioProps>({
      typeOfInvestment: '',
      percentChange: 0.0,
      investmentValue: 0.0,
    })
  const [coinInvestment, setCoinInvestment] = useState<DashboardPortfolioProps>(
    {
      typeOfInvestment: '',
      percentChange: 0.0,
      investmentValue: 0.0,
    }
  )

  const setData = async () => {
    try {   
       const headers = getHeader();
      await axios
        .get(`${url}/users/1/wallets/`,{headers})
        .then(async (response: any) => {
          const data = response.data
          let tempInvestment = 0
          for (let coinData of data) {
            tempInvestment += coinData.investedAmount
            if (coinData.currencyId === coin) {
              await axios
                .get(`${url}/currency/${coin}`)
                .then((response: any) => {
                  const responseData = response.data
                  const tempCoinInvestment: DashboardPortfolioProps = {
                    typeOfInvestment: responseData.name,
                    percentChange: responseData.priceChange,
                    investmentValue: coinData.investedAmount,
                  }
                  setCoinInvestment(tempCoinInvestment)
                })
              }
          const tempTotalInvestment: DashboardPortfolioProps = {
            typeOfInvestment: 'Total investment',
            percentChange: +1.2,
            investmentValue: tempInvestment,
          }
          setTotalInvestment(tempTotalInvestment)
        }
        })
    } catch {}
  }

  useEffect(() => {
    setData()
  }, [])

  return {
    totalInvestment,
    setTotalInvestment,
    coinInvestment,
    setCoinInvestment,
  }
}

export const usePortfolioCoinsandWalletHook = () => {
  const [portfolioCoins, setPortfolioCoins] = useState<PortfolioCoinProps[]>([])
  const [cashWallet, setCashWallet] = useState<number>(0)

  const setData = async () => {
    try {
      const headers = getHeader();
      await axios
        .get(`${url}/users/1/wallets/1`,{headers})
        .then(async (response: any) => {
          let data = response.data
          setCashWallet(data.balance)
        })
          const newCoins: PortfolioCoinProps[] = [...portfolioCoins]
          const response1 = await axios.get(`${url}/users/1/wallets/2`,{headers});
          const coinData1 = response1.data;
          const response2 = await axios.get(`${url}/users/1/wallets/3`,{headers});
          const coinData2 = response2.data;
      
          const [currencyResponse1, currencyResponse2] = await Promise.all([
            axios.get(`${url}/currency/${coinData1.currencyId}`),
            axios.get(`${url}/currency/${coinData2.currencyId}`)
          ]);
      
          const tempData1 = currencyResponse1.data;
          const tempData2 = currencyResponse2.data;
      
          const tempCoin1: PortfolioCoinProps = {
            id: tempData1.id,
            image: tempData1.icon,
            name: tempData1.name,
            symbol: tempData1.symbol,
            investedAmount: coinData1.investedAmount || 0,
            change: isNaN(tempData1.priceChange) ? 0 : tempData1.priceChange,
          };
      
          const tempCoin2: PortfolioCoinProps = {
            id: tempData2.id,
            image: tempData2.icon,
            name: tempData2.name,
            symbol: tempData2.symbol,
            investedAmount: coinData2.investedAmount || 0,
            change: isNaN(tempData2.priceChange) ? 0 : tempData2.priceChange,
          };
          newCoins.push(tempCoin1)
          newCoins.push(tempCoin2)
          setPortfolioCoins(newCoins)
            
    } catch {}
  }

  useEffect(() => {
    setData()
  }, [])

  return { portfolioCoins, setPortfolioCoins, cashWallet, setCashWallet }
}

export const useRecentTransactionsHook = () => {
  const [recentTransactions, setRecentTransactions] = useState<
    TransactionsProps[]
  >([])

  const setData = async () => {
    try {
      const headers = getHeader();
      await axios
        .get(`${url}/users/1/transactions/`,{headers})
        .then((response: any) => {
          const data = response.data
          let tempTransactions: TransactionsProps[] = [...recentTransactions]
          for (let transactionData of data) {
            tempTransactions.push(transactionData)
          }
          if (tempTransactions.length > 4) {
            tempTransactions = tempTransactions.slice(-2).reverse();
          }
          setRecentTransactions(tempTransactions)
        })
    } catch {}
  }

  useEffect(() => {
    setData()
  }, [])

  return { recentTransactions, setRecentTransactions }
}

export const useGraphDataHook = (id: string) => {
  const [graphData, setGraphData] = useState<number[]>([])
  const setData = async () => {
    try {
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=5&interval=daily`
        )
        .then((data) => {
          let dataArray = data.data.prices.map(
            (array: Array<number>) => array[1]
          )
          setGraphData(dataArray)
        })
        .catch((error) => console.log(error))
    } catch {}
  }

  useEffect(() => {
    setData()
  }, [])

  return { graphData, setGraphData }
}
