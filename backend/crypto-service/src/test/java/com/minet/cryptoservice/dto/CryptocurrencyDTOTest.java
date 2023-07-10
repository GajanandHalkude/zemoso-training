package com.minet.cryptoservice.dto;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CryptocurrencyDTOTest {

    @Test
    void cryptoDTOTest(){

        CryptoCurrencyDto cryptocurrencyDTO=new CryptoCurrencyDto();

        cryptocurrencyDTO.setId("bitcoin");
        cryptocurrencyDTO.setName("Bitcoin");
        cryptocurrencyDTO.setSymbol("btc");
        cryptocurrencyDTO.setIcon("bitcoin");
        cryptocurrencyDTO.setPrice(1000);
        cryptocurrencyDTO.setMarketCap(1000);
        cryptocurrencyDTO.setTotalSupply(1000);
        cryptocurrencyDTO.setAvailableSupply(1000);
        cryptocurrencyDTO.setVolume(1000);
        cryptocurrencyDTO.setPriceChange(1);

        Assertions.assertEquals("bitcoin",cryptocurrencyDTO.getId());
        Assertions.assertEquals("Bitcoin",cryptocurrencyDTO.getName());
        Assertions.assertEquals("btc",cryptocurrencyDTO.getSymbol());
        Assertions.assertEquals("bitcoin",cryptocurrencyDTO.getIcon());
        Assertions.assertEquals(1000,cryptocurrencyDTO.getPrice());
        Assertions.assertEquals(1000,cryptocurrencyDTO.getMarketCap());
        Assertions.assertEquals(1000,cryptocurrencyDTO.getTotalSupply());
        Assertions.assertEquals(1000,cryptocurrencyDTO.getAvailableSupply());
        Assertions.assertEquals(1000,cryptocurrencyDTO.getVolume());
        Assertions.assertEquals(1,cryptocurrencyDTO.getPriceChange());
    }
    @Test
    void cryptoDTOTest1() {

        CryptoCurrencyDto cryptocurrencyDTO = new CryptoCurrencyDto("bitcoin", "Bitcoin", "btc", "bitcoin", 1000, 1000, 1000, 1000, 1, 1000);

        Assertions.assertEquals("bitcoin", cryptocurrencyDTO.getId());
        Assertions.assertEquals("Bitcoin", cryptocurrencyDTO.getName());
        Assertions.assertEquals("btc", cryptocurrencyDTO.getSymbol());
        Assertions.assertEquals("bitcoin", cryptocurrencyDTO.getIcon());
        Assertions.assertEquals(1000, cryptocurrencyDTO.getPrice());
        Assertions.assertEquals(1000, cryptocurrencyDTO.getMarketCap());
        Assertions.assertEquals(1000, cryptocurrencyDTO.getTotalSupply());
        Assertions.assertEquals(1000, cryptocurrencyDTO.getAvailableSupply());
        Assertions.assertEquals(1, cryptocurrencyDTO.getPriceChange());
        Assertions.assertEquals(1000, cryptocurrencyDTO.getVolume());
    }

}