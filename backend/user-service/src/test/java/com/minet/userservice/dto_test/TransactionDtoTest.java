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
        newTransaction.setCurrency_id("bitcoin");
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
        assertThat(newTransaction.getCurrency_id()).isEqualTo("bitcoin");

        TransactionDto transactionDto = new TransactionDto(1, "bitcoin", "sell", "BTC", 3456.54, 1.2, dateTime, "success");

        assertThat(transactionDto).isNotNull();
        assertThat(transactionDto.getDate()).isEqualTo(dateTime);
        assertThat(transactionDto.getType()).isEqualTo("sell");
        assertThat(transactionDto.getId()).isEqualTo(1);
        assertThat(transactionDto.getPrice()).isEqualTo(3456.54);
        assertThat(transactionDto.getQuantity()).isEqualTo(1.2);
        assertThat(transactionDto.getSymbol()).isEqualTo("BTC");
        assertThat(transactionDto.getStatus()).isEqualTo("success");
        assertThat(transactionDto.getCurrency_id()).isEqualTo("bitcoin");

        TransactionDto.builder().id(1).price(5000).quantity(1).symbol("BTC").date(dateTime).status("success").currency_id("bitcoing").build();
    }
}
