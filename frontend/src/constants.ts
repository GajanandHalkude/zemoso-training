import  Bitcoin  from "../public/assets/images/bitcoin.svg";
import Ethreum  from "../public/assets/images/ethreum.svg";
import  Xrp  from "../public/assets/images/Rectangle 4.svg";
import  Tether  from "../public/assets/images/Tether.svg";

export const menuItems = [
    { text: "Dashboard" },
    { text: "Careers" },
    { text: "Legal & Privacy" },
    { text: "© 2021 Minet", isBlack: true },
  ];

  export const buttonLabel = "NEED HELP";

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