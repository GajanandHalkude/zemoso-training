package com.minet.cryptoservice.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CryptocurrencyTest {
    @Test
    void cryptoEntityTest(){
        CryptoCurrency cryptocurrency=new CryptoCurrency();
        cryptocurrency.setId("bitcoin");
        cryptocurrency.setName("Bitcoin");
        cryptocurrency.setSymbol("btc");
        cryptocurrency.setIcon("bitcoin");
        cryptocurrency.setPrice(1000);
        cryptocurrency.setMarketCap(1000);
        cryptocurrency.setTotalSupply(1000);
        cryptocurrency.setAvailableSupply(1000);
        cryptocurrency.setVolume(1000);
        cryptocurrency.setPriceChange(1);

        Assertions.assertEquals("bitcoin",cryptocurrency.getId());
        Assertions.assertEquals("Bitcoin",cryptocurrency.getName());
        Assertions.assertEquals("btc",cryptocurrency.getSymbol());
        Assertions.assertEquals("bitcoin",cryptocurrency.getIcon());
        Assertions.assertEquals(1000,cryptocurrency.getPrice());
        Assertions.assertEquals(1000,cryptocurrency.getMarketCap());
        Assertions.assertEquals(1000,cryptocurrency.getTotalSupply());
        Assertions.assertEquals(1000,cryptocurrency.getAvailableSupply());
        Assertions.assertEquals(1000,cryptocurrency.getVolume());
        Assertions.assertEquals(1,cryptocurrency.getPriceChange());

    }
    @Test
    void cryptoEntityTest1(){
        CryptoCurrency cryptocurrency=new CryptoCurrency("bitcoin", "Bitcoin", "btc", "bitcoin", 1000, 1000, 1000, 1000, 1, 1000);

        Assertions.assertEquals("bitcoin",cryptocurrency.getId());
        Assertions.assertEquals("Bitcoin",cryptocurrency.getName());
        Assertions.assertEquals("btc",cryptocurrency.getSymbol());
        Assertions.assertEquals("bitcoin",cryptocurrency.getIcon());
        Assertions.assertEquals(1000,cryptocurrency.getPrice());
        Assertions.assertEquals(1000,cryptocurrency.getMarketCap());
        Assertions.assertEquals(1000,cryptocurrency.getTotalSupply());
        Assertions.assertEquals(1000,cryptocurrency.getAvailableSupply());
        Assertions.assertEquals(1,cryptocurrency.getPriceChange());
        Assertions.assertEquals(1000,cryptocurrency.getVolume());
    }
    @Test
    void cryptoEntityToStringTest() {
        CryptoCurrency cryptocurrency = new CryptoCurrency("bitcoin", "Bitcoin", "btc", "bitcoin", 1000, 1000, 1000, 1000, 1, 1000);

        String expectedToString = "CryptoCurrency{id='bitcoin', name='Bitcoin', symbol='btc', icon='bitcoin', price=1000.0, marketCap=1000.0, totalSupply=1000.0, availableSupply=1000.0, priceChange=1.0, volume=1000.0}";

        Assertions.assertEquals(expectedToString, cryptocurrency.toString());
    }

}