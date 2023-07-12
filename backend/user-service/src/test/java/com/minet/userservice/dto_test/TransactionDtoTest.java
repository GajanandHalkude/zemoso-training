package com.minet.userservice.dto_test;

import com.minet.userservice.dto.TransactionDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

import java.time.LocalDateTime;

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
        newTransaction.setTransactionPerson("sai");

        assertThat(newTransaction).isNotNull();
        assertThat(newTransaction.getDate()).isEqualTo(dateTime);
        assertThat(newTransaction.getType()).isEqualTo("sell");
        assertThat(newTransaction.getId()).isEqualTo(1);
        assertThat(newTransaction.getPrice()).isEqualTo(3456.54);
        assertThat(newTransaction.getQuantity()).isEqualTo(1.2);
        assertThat(newTransaction.getSymbol()).isEqualTo("BTC");
        assertThat(newTransaction.getStatus()).isEqualTo("success");
        assertThat(newTransaction.getCurrencyId()).isEqualTo("bitcoin");
        assertThat(newTransaction.getTransactionPerson()).isEqualTo("sai");

        TransactionDto transactionDto = new TransactionDto(1, "bitcoin", "sell", "BTC", 3456.54, 1.2, dateTime, "success","sai");

        assertThat(transactionDto).isNotNull();
        assertThat(transactionDto.getDate()).isEqualTo(dateTime);
        assertThat(transactionDto.getType()).isEqualTo("sell");
        assertThat(transactionDto.getId()).isEqualTo(1);
        assertThat(transactionDto.getPrice()).isEqualTo(3456.54);
        assertThat(transactionDto.getQuantity()).isEqualTo(1.2);
        assertThat(transactionDto.getSymbol()).isEqualTo("BTC");
        assertThat(transactionDto.getStatus()).isEqualTo("success");
        assertThat(transactionDto.getCurrencyId()).isEqualTo("bitcoin");
        assertThat(transactionDto.getTransactionPerson()).isEqualTo("sai");

        TransactionDto.builder().id(1).price(5000).quantity(1).symbol("BTC").date(dateTime).status("success").currencyId("bitcoing").transactionPerson("sai").build();
    }
}
