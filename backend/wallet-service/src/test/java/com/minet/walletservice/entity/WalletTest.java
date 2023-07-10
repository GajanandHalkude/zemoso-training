package com.minet.walletservice.entity;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import static org.junit.jupiter.api.Assertions.assertEquals;

class WalletTest {

    @DisplayName("JUnit tests for Wallet entity")
    @Test
    void walletTest() {
        Wallet wallet = new Wallet();
        wallet = new Wallet(1, "My Wallet", BigDecimal.valueOf(1000.0), BigDecimal.valueOf(500.0),
                BigDecimal.valueOf(2000.0), "USD");
        assertEquals(1, wallet.getId());
        wallet.setId(2);
        assertEquals(2, wallet.getId());
        assertEquals("My Wallet", wallet.getName());
        wallet.setName("Updated Wallet");
        assertEquals("Updated Wallet", wallet.getName());
        assertEquals(BigDecimal.valueOf(1000.0), wallet.getBalance());
        wallet.setBalance(BigDecimal.valueOf(2000.0));
        assertEquals(BigDecimal.valueOf(2000.0), wallet.getBalance());
        assertEquals(BigDecimal.valueOf(500.0), wallet.getAvgValue());
        wallet.setAvgValue(BigDecimal.valueOf(1000.0));
        assertEquals(BigDecimal.valueOf(1000.0), wallet.getAvgValue());
        assertEquals(BigDecimal.valueOf(2000.0), wallet.getInvestedAmount());
        wallet.setInvestedAmount(BigDecimal.valueOf(4000.0));
        assertEquals(BigDecimal.valueOf(4000.0), wallet.getInvestedAmount());
        assertEquals("USD", wallet.getCurrencyId());
        wallet.setCurrencyId("EUR");
        assertEquals("EUR", wallet.getCurrencyId());

        String expectedToString = "Wallet{id=2, name='Updated Wallet', balance=2000.0, avgValue=1000.0, investedAmount=4000.0, currencyId='EUR'}";
        assertEquals(expectedToString, wallet.toString());

        Wallet wallet1 = Wallet.builder()
                .id(1)
                .name("Wallet 1")
                .balance(BigDecimal.valueOf(1000.0))
                .avgValue(BigDecimal.valueOf(500.0))
                .investedAmount(BigDecimal.valueOf(2000.0))
                .currencyId("USD")
                .build();
        assertEquals(1, wallet1.getId());
        assertEquals("Wallet 1", wallet1.getName());
        assertEquals(BigDecimal.valueOf(1000.0), wallet1.getBalance());
        assertEquals(BigDecimal.valueOf(500.0), wallet1.getAvgValue());
        assertEquals(BigDecimal.valueOf(2000.0), wallet1.getInvestedAmount());
        assertEquals("USD", wallet1.getCurrencyId());
    }
}
