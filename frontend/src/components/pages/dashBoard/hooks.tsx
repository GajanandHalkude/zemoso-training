/* eslint-disable prefer-const */
import axios from 'axios'
import { useEffect, useState } from 'react'
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
    cryptoId: string
    transactionDateTime: string
    quantity: string
    symbol: string
    transactionType: string
    price: number
    status: string
    remarks: string
  }
export const useWatchlistHook = () => {
  const [watchlistData, setWatchlistData] = useState<WatchlistDataProps[]>([])

  const setData = async () => {
    try {
  const watchlistResponse = await axios.get('https://bc92-ms.zebc61.ml/watchlist');
  const watchlistData = watchlistResponse.data;
  const newCoins: WatchlistDataProps[] = [];
  console.log(newCoins)

  const coinDataPromises = watchlistData.map(async (coinData: any) => {
    try {
      const response = await axios.get(`https://bc92-ms.zebc61.ml/cryptocurrency/${coinData.id}`);
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
  // console.log(filteredCoinDataArray)
  // console.log(newCoins)
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
      await axios
        .get('https://bc92-ms.zebc61.ml/wallet/cash')
        .then(async (response: any) => {
          const data = response.data
          let tempInvestment = 0
          //console.log(data)
            tempInvestment += data.invested_amount
              await axios
                .get(`https://bc92-ms.zebc61.ml/cryptocurrency/${coin}`)
                .then((response: any) => {
                  const responseData = response.data
                  const tempCoinInvestment: DashboardPortfolioProps = {
                    typeOfInvestment: responseData.name,
                    percentChange: responseData.priceChange,
                    investmentValue: data.invested_amount,
                  }
                  setCoinInvestment(tempCoinInvestment)
                })
          const tempTotalInvestment: DashboardPortfolioProps = {
            typeOfInvestment: 'Total investment',
            percentChange: +1.2,
            investmentValue: tempInvestment,
          }
          setTotalInvestment(tempTotalInvestment)
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
      await axios
        .get('https://bc92-ms.zebc61.ml/wallet/cash')
        .then(async (response: any) => {
          let data = response.data
          setCashWallet(data.balance)
        })
          const newCoins: PortfolioCoinProps[] = [...portfolioCoins]
          await axios
            .get('https://bc92-ms.zebc61.ml/wallet/bitcoin')
            .then(async (response: any) => {
              let coinData = response.data
              console.log(coinData)
              await axios
              .get(`https://bc92-ms.zebc61.ml/cryptocurrency/${coinData.id}`)
              .then((response: any) => {
                const tempData = response.data
                const tempCoin: PortfolioCoinProps = {
                  id: tempData.id,
                  image: tempData.icon,
                  name: tempData.name,
                  symbol: tempData.symbol,
                  investedAmount: coinData.invested_amount || 0,
                  change: isNaN(tempData.priceChange) ? 0 : tempData.priceChange,
                }
                newCoins.push(tempCoin)
              })
          
          setPortfolioCoins(newCoins)
            })
            
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
      await axios
        .get('https://bc92-ms.zebc61.ml/transactions')
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
