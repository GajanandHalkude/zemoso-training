package com.minet.portfolioservice.dtotests;

import com.minet.portfolioservice.dto.TransactionDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class TransactionDtoTest {

    @DisplayName("JUnit tests for transaction dto")
    @Test
    void testTransactionDto() {
        TransactionDto newTransaction = new TransactionDto();

        LocalDateTime dateTime = LocalDateTime.now();

        newTransaction.setId(1);
        newTransaction.setCurrencyId("bitcoin");
        newTransaction.setType("sell");
        newTransaction.setPrice(3456.54);
        newTransaction.setQuantity(1.2);
        newTransaction.setStatus("success");
        newTransaction.setSymbol("BTC");
        newTransaction.setDate(dateTime);

        assertThat(newTransaction).isNotNull();
        assertThat(newTransaction.getDate()).isEqualTo(dateTime);
        assertThat(newTransaction.getType()).isEqualTo("sell");
        assertThat(newTransaction.getId()).isEqualTo(1);
        assertThat(newTransaction.getPrice()).isEqualTo(3456.54);
        assertThat(newTransaction.getQuantity()).isEqualTo(1.2);
        assertThat(newTransaction.getSymbol()).isEqualTo("BTC");
        assertThat(newTransaction.getStatus()).isEqualTo("success");
        assertThat(newTransaction.getCurrencyId()).isEqualTo("bitcoin");
    }
}
