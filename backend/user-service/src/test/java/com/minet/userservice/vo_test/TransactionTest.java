package com.minet.userservice.vo_test;
import com.minet.userservice.vo.Transaction;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class TransactionTest {

    @DisplayName("JUnit tests for transaction vo")
    @Test
    void testTransaction() {
        Transaction newTransaction = new Transaction();

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

        Transaction transaction = new Transaction(1,"bitcoin","sell","BTC",3456.54,1.2,dateTime,"success");

        assertThat(transaction).isNotNull();
        assertThat(transaction.getDate()).isEqualTo(dateTime);
        assertThat(transaction.getType()).isEqualTo("sell");
        assertThat(transaction.getId()).isEqualTo(1);
        assertThat(transaction.getPrice()).isEqualTo(3456.54);
        assertThat(transaction.getQuantity()).isEqualTo(1.2);
        assertThat(transaction.getSymbol()).isEqualTo("BTC");
        assertThat(transaction.getStatus()).isEqualTo("success");
        assertThat(transaction.getCurrencyId()).isEqualTo("bitcoin");
    }
}
