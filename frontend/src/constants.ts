import Bitcoin  from "../public/assets/images/bitcoin.svg";
import Ethreum  from "../public/assets/images/ethreum.svg";
import Xrp  from "../public/assets/images/Rectangle 4.svg";
import Tether  from "../public/assets/images/Tether.svg";
import ethreum from "../public/assets/images/ethreum.svg";
import BitcoinCoin from "../public/assets/images/Bitcoin Coin.svg";
import Cardano from "../public/assets/images/Cardano.svg";
import DodgeCoin from "../public/assets/images/Dodge Coin.svg";
import Ethereum2 from "../public/assets/images/ethereum 2.svg";
import xrp from "../public/assets/images/XRP.svg";
import USDCoin from "../public/assets/images/USD Coin.svg"

export const menuItems = [
    { text: "Dashboard" },
    { text: "Careers" },
    { text: "Legal & Privacy" },
    { text: "© 2021 Minet", isBlack: true },
  ];

  export const buttonLabel = "NEED HELP";

  export const CHOOSE_CRYPTO = "Choose crypto";

  export const currencyBannerContent = "The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis each satoshi is worth 0.00000001 bitcoin."
  
  export const currencyBannerData = [
    {
        icon:Bitcoin,coinName:"Bitcoin" , shortName:"Moves tightly together" , value:3285553.375 , percentage:100
    },
    {
      icon:Ethreum,coinName:"Ethreum" , shortName:"Moves tightly together" , value:230966.85 , percentage:86
    },
    {
      icon:Xrp,coinName:"XRP" , shortName:"Moves tightly together" , value:60.20 , percentage:10
    },
    {
      icon:Tether,coinName:"Tether" , shortName:"Moves tightly together" , value:74.28 , percentage:2
    },
  ]
   export const  buy="BUY";
   export const sell="SELL";
export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const timeLineValues = ["1H", "24H", "1W", "1M", "1Y", "ALL"];   

export const MyPortfolioData = [
  {
      icon:Bitcoin,coinName:"Bitcoin" , shortName:"BTC" , value:1.00 , percentage:0.00
  },
  {
    icon:Ethreum,coinName:"Ethreum" , shortName:"ETH" , value:2.00 , percentage:0.00
  },
  {
    icon:Tether,coinName:"Tether" , shortName:"USDT" , value:3.00 , percentage:0.00
  },
  {
    icon:Xrp,coinName:"XRP" , shortName:"XRP" , value:4.00 , percentage:0.00
  }
]
interface HashmapProps {
  [key: string]: string;
}

export const pictures: HashmapProps = {
  bitcoin: Bitcoin,
  ethereum: ethreum,
  usdCoin: USDCoin,
  xrp: xrp,
  binanceUsd: BitcoinCoin,
  ethereum2: Ethereum2,
  dogecoin: DodgeCoin,
  cardano: Cardano,
  tether: Tether,
};

export const currencies = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    icon: "bitcoin",
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
    isSelected: true,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    icon: "ethereum",
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
    isSelected: false,
  },
  {
    id: "usd-coin",
    name: "USD Coin",
    symbol: "USDC",
    icon: "binanceUsd",
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
    isSelected: false,
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    icon: "xrp",
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
    isSelected: false,
  },
  {
    id: "ethereum2",
    name: "Ethereum 2",
    symbol: "ETH",
    icon: "ethereum2",
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
    isSelected: false,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "CRD",
    icon: "cardano",
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
    isSelected: false,
  },
  {
    id: "dodge",
    name: "Dodge Coin",
    symbol: "DDG",
    icon: "dogecoin",
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
    isSelected: false,
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "ETH",
    icon: "tether",
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
    isSelected: false,
  },
];
