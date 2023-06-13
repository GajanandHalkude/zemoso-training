import React from "react";
import ImageComponent  from "./index";
import {ComponentStory} from "@storybook/react"
import Bitcoin from '../../../../public/images/bitcoin.svg'
import Ethereum from '../../../../public/images/ethreum.svg';
import Dodge from '../../../../public/images/DodgeCoin.svg';

export default{
    title: 'atoms/Image',
    component: ImageComponent,
}

const Template: ComponentStory<typeof ImageComponent> = (args:any) =>(
    <ImageComponent {...args}/>
)


export const Coin = Template.bind({})
Coin.args={
    src:Bitcoin,
    height: '60px',
    width: '60px',
}

export const EthereumCoin = Template.bind({});
EthereumCoin.args = {
  src: Ethereum,
  height: '60px',
  width: '60px',
};


export const DodgeCoin = Template.bind({});
DodgeCoin.args = {
  src: Dodge,
  height: '60px',
  width: '60px',
};

