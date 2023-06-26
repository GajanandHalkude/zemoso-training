import { useEffect, useState } from 'react'
import { AmountDetailsCardProps } from '.'
import { roundValue } from '../../../constants'

export const useCustomHook = (props: AmountDetailsCardProps) => {
  const { balance, price, transactionType, handleChange } = props
  const [amount, setAmount] = useState(1000)
  const [quantity, setQuantity] = useState(1000.0 / price)
  const [isAmountChanged, setIsAmountChanged] = useState(false)
  const [isQuantityChanged, setIsQuantityChanged] = useState(false)
  const [error, setError] = useState(false)
  const [value, setValue] = useState<number>(transactionType === 'buy' ? amount: quantity)

  
  useEffect(() => {
    setAmount(1000)
    setIsAmountChanged(true)
  }, [price])

  useEffect(() => {
    if (amount !== 0) setQuantity(roundValue(amount / price))
    else setQuantity(0)
    setIsAmountChanged(false)
  }, [isAmountChanged])
  useEffect(() => {
    if (
      quantity === 0 ||
      amount === 0 ||
      (transactionType === 'buy' && amount > balance-1000) ||
      (transactionType === 'sell' && quantity > balance)
    )
      setError(true)
    else setError(false)
  }, [amount, quantity])

  useEffect(() => {
    if (quantity !== 0) setAmount(parseFloat((quantity * price).toFixed(2)))
    else setAmount(0)
    handleChange(quantity,amount)
    setIsQuantityChanged(false)
  }, [isQuantityChanged])

  return {
    amount,
    setAmount,
    quantity,
    setQuantity,
    isAmountChanged,
    setIsAmountChanged,
    isQuantityChanged,
    setIsQuantityChanged,
    error,
    setError,
    value,
    setValue
  }
}