package com.minet.userservice.exceptions_test;

import com.minet.userservice.exception.TransactionNotFoundException;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.exception.WalletNotFoundException;
import com.minet.userservice.exception.WatchlistNotFoundException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class ExceptionsTest {

    @DisplayName("JUnit tests for user not found exception dto")
    @Test
    void userNotFoundExceptionTest() throws Exception{
        Exception exception = new UserNotFoundException("user not found");
        assertThat(exception.getMessage()).isEqualTo("user not found");
    }

    @DisplayName("JUnit tests for wallet not found exception dto")
    @Test
    void walletNotFoundExceptionTest() throws Exception{
        Exception exception = new WalletNotFoundException("wallet not found");
        assertThat(exception.getMessage()).isEqualTo("wallet not found");
    }

    @DisplayName("JUnit tests for transaction not found exception dto")
    @Test
    void transactionNotFoundExceptionTest() throws Exception{
        Exception exception = new TransactionNotFoundException("transaction not found");
        assertThat(exception.getMessage()).isEqualTo("transaction not found");
    }

    @DisplayName("JUnit tests for watchlist not found exception dto")
    @Test
    void watchlistNotFoundExceptionTest() throws Exception{
        Exception exception = new WatchlistNotFoundException("watchlist not found");
        assertThat(exception.getMessage()).isEqualTo("watchlist not found");
    }
}
