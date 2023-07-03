import Bitcoin  from "../public/assets/images/bitcoin.svg";
import Ethreum  from "../public/assets/images/ethreum.svg";
import Xrp  from "../public/assets/images/Rectangle 4.svg";
import Tether  from "../public/assets/images/Tether.svg";
import BitcoinCoin from "../public/assets/images/Bitcoin Coin.svg";
import Cardano from "../public/assets/images/Cardano.svg";
import DodgeCoin from "../public/assets/images/Dodge Coin.svg";
import Ethereum2 from "../public/assets/images/ethereum 2.svg";
import xrp from "../public/assets/images/XRP.svg";
import USDCoin from "../public/assets/images/USD Coin.svg"
import theme from '../src/theme'
import Google from "../public/assets/icons/google.svg";
import Facebook from "../public/assets/icons/facebook.svg";
import Microsoft from "../public/assets/icons/microsoft.svg";
import ButtonComponent from "../src/components/atoms/button";
import CustomTextField from "../src/components/atoms/textField";
import MuiTypography from "../src/components/atoms/typography";
import SocialLogin from "../src/components/molecules/socialLogin";
import moment from 'moment'


export { ButtonComponent, CustomTextField, MuiTypography, SocialLogin };

 export const socialLoginOptions = [
  { src: Google, text: "Google" },
  { src: Facebook, text: "Facebook" },
  { src: Microsoft, text: "Microsoft" },
];


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

export const paymentSummaryStepper = {
  step1: ["Payment method", "Visa credit ...8845"],
  step2: ["Delivery fees", "0.001 BTC"],
  step3: ["Deposit to", "Bitcoin wallet"],
};

export const dollarValue = 3406069.54;

export const timeLineValues = ["1H", "24H", "1W", "1M", "1Y", "ALL"];   

export const cryptoCoins = [
  {
    name: 'Bitcoin',
    color: theme.palette.chipColors.main,
  },
  {
    name: 'XRP',
    color: theme.palette.chipColors.color1,
  },
  {
    name: 'Polkadot',
    color: theme.palette.chipColors.color2,
  },
  {
    name: 'Ethereum',
    color: theme.palette.chipColors.color3,
  },
  {
    name: 'Tether',
    color: theme.palette.chipColors.color4,
  },
  {
    name: 'Ethereum 2',
    color: theme.palette.chipColors.color5,
  },
  {
    name: 'Dodge coin',
    color: theme.palette.chipColors.color6,
  },
]
export const passwordspecification = "A min of 8 character with atleast 1 special character and number included"

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


 export const ProfitData = [30, 40, 45, 80, 49, 60, 30, 91];
export const LossData = [50, 30, 40, 60, 40, 30, 90, 30];



export const WalletBodyData = [
  {
    date:new Date("2023-06-15") ,coinName:"Bitcoin" , TraderName:"Saiprabhu" , Trade:"Purchased" , QuantityOfCoin:0.001, Amount:9000
  },
  {
    date:new Date("2023-06-15") ,coinName:"Ethereum" , TraderName:"Gajanand" , Trade:"Sold" , QuantityOfCoin:0.002, Amount:7000
  }

]
interface HashmapProps {
  [key: string]: string;
}

export const pictures: HashmapProps = {
  bitcoin: Bitcoin,
  ethereum: Ethreum,
  usdCoin: USDCoin,
  xrp: xrp,
  binanceUsd: BitcoinCoin,
  ethereum2: Ethereum2,
  dogecoin: DodgeCoin,
  cardano: Cardano,
  tether: Tether,
};

export interface Wallet {
  id: string;
  name: string;
  balance: number;
  avg_value: number;
  invested_amount: number;
}
export interface Transaction {
  id: number;
  cryptoId: string;
  transactionDateTime: string;
  quantity: number;
  symbol: string;
  transactionType: string;
  price: number;
  status: string;
  from: string;
}

export const currencies = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    icon: "bitcoin",
    price: 19124.56,
    marketCap: 366730983,
    totalSupply: 210000,
    availableSupply: 1917711,

    priceChange:2.5,

    volume: 56214521561,
    isSelected: true,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    icon: "ethereum",
    price: 19123.561,
    marketCap: 366730983872,
    totalSupply: 210000002,
    availableSupply: 19177112,

    priceChange:2.5,

    volume: 562145215,
    isSelected: false,
  },
  {
    id: "usd-coin",
    name: "USD Coin",
    symbol: "USDC",
    icon: "binanceUsd",
    price: 29123.56,
    marketCap: 6730983878,
    totalSupply: 31000000,
    availableSupply: 18177118,

    priceChange:2.5,

    volume: 564521562,
    isSelected: false,
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    icon: "xrp",
    price: 28223.56,
    marketCap: 376730983878,
    totalSupply: 29000000,
    availableSupply: 24177118,

    priceChange:2.5,

    volume: 56214531562,
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

    priceChange:2.5,

    volume: 56214521562,
    isSelected: false,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "CRD",
    icon: "cardano",
    price: 89123.56,
    marketCap: 466930183878,
    totalSupply: 410000,
    availableSupply: 191937118,

    priceChange:2.5,

    volume: 56214575462,
    isSelected: false,
  },
  {
    id: "dodge",
    name: "Dodge Coin",
    symbol: "DDG",
    icon: "dogecoin",
    price: 53623.56,
    marketCap: 3789630983878,
    totalSupply:14592000,
    availableSupply: 1975410118,

    priceChange:2.5,

    volume: 56263821562,
    isSelected: false,
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "ETH",
    icon: "tether",
    price: 45393.56,
    marketCap: 743690983878,
    totalSupply: 76150000,
    availableSupply: 95417118,

    priceChange:2.5,

    volume: 5621457429,
    isSelected: false,
  },
];

export const compactFormat = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
})


export const DELIVERY_TYPES = [
  { type: 'Instant : ', time: '2-5 minutes', fees: '0.001', values: 10 },
  { type: 'Faster : ', time: '4 hours', fees: '0.001', values: 20 },
  { type: 'Fast : ', time: '120 hours', fees: '0.001', values: 30 },
  { type: 'None', time: '', values: 40 },
]


export const roundValue = (number: number) => {
  return Math.round(number * 100000000) / 100000000
}

export const TradeFrameData = [
  {
    icon:Bitcoin,coinName:"Bitcoin" , shortName:"BTC" , price:3285553.73 , change:1.06 , marketcap:60.1 , star:true
  },
  {
    icon:Ethreum,coinName:"Ethreum" , shortName:"ETH" , price:216678.10 , change:-4.59 , marketcap:25.4 ,star:true
  },
  {
    icon:Xrp,coinName:"XRP" , shortName:"XRP" , price:57.21 , change:1.11 , marketcap:2.7,star:false
  }
]
export const BitcoinTransactionValues = [
  {
    id:1,
    name: 'Bitcoin',
    from: 'Badgley',
    date: new Date("2023-06-15"),
    btcPrice: 0.001,
    dollarPrice: 900,
    status: 'pending',
    label:'Purchased'
  },
  {
    id:2,
    name: 'Bitcoin',
    from: 'Jane Cooper',
    date: new Date("2023-04-16"),
    btcPrice: 0.023,
    dollarPrice: 1800,
    status: 'fail',
    label:'Purchased'
  },
  {
    id:3,
    name: 'Bitcoin',
    from: 'Leslie Alexander',
    date: new Date("2023-06-20"),
    btcPrice: 0.003,
    dollarPrice: 1200,
    status: 'success',
    label:'Purchased'
  },
]
export const BitcoinWatchListBar = [
  {
    id:1,
    coinIcon: Bitcoin,
    coinName: 'Bitcoin',
    coinSymbol: 'BTC',
    percentageChange: +2.09,
    isAddedtoWishList: true,
    marketCap: 5862471259.356,
    volumeIn24H: 751428635.90,
    circulatingSupply : 7142539.89
  }
]
export const Graphcategories = ['Jun 8', 'Jun 15', 'Jun 22', 'Jun 30', 'Jul 7', 'Jul 13']
export const GraphData = [40, 43, 45, 42, 44, 46]
export const GraphData1 = [34, 54, 23, 90, 12, 34]
export const formatDate = (date: string) => {
  return moment(date, 'YYYY-MM-DD').format('LL').split(',')[0]
}
export const RECENT_TRANSACTIONS = "Recent Transactions"
export const VIEW_ALL = "View All"

export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email);
};

export const isPasswordValid = (password: string): boolean => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

export const isValidCode = (code: string): boolean => {
   const codeRegex = /^\d{8}$/;
   return codeRegex.test(code);
 };

