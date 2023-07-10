package com.minet.portfolioservice.servicetests;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.portfolioservice.entity.Transaction;
import com.minet.portfolioservice.exception.TransactionNotFoundException;
import com.minet.portfolioservice.repository.TransactionRepository;
import com.minet.portfolioservice.service.MapperService;
import com.minet.portfolioservice.service.TransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;

@WebMvcTest(TransactionService.class)
class TransactionServiceTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    @MockBean
    private MapperService mapperService;

    @MockBean
    private TransactionRepository transactionRepository;

    @Autowired
    private TransactionService transactionService;

    private Transaction firstTransaction;
    private Transaction secondTransaction;

    @BeforeEach
    void setup() {
        // Arrange
        firstTransaction = Transaction.builder()
                .id(1)
                .currencyId("bitcoin")
                .type("sell")
                .symbol("BTC")
                .price(2343.98)
                .quantity(0.2)
                .date(LocalDateTime.now())
                .status("success")
                .build();

        secondTransaction = Transaction.builder()
                .id(2)
                .currencyId("bitcoin")
                .type("buy")
                .symbol("BTC")
                .price(254.98)
                .quantity(0.1)
                .date(LocalDateTime.now())
                .status("success")
                .build();
    }

    @DisplayName("JUnit test for fetching all transactions")
    @Test
    void fetchAllTransactions() throws Exception {
        // Arrange
        List<Transaction> records = new ArrayList<>(Arrays.asList(firstTransaction, secondTransaction));

        Mockito.when(transactionService.findAllTransactions()).thenReturn(records);

        // Act
        List<Transaction> transactions = transactionService.findAllTransactions();

        // Assert
        assertNotNull(transactions);

        // Arrange
        Mockito.when(transactionService.findAllTransactions()).thenThrow(new TransactionNotFoundException("Transactions not found"));

        // Act & Assert
        assertThrows(TransactionNotFoundException.class, () -> {
            transactionService.findAllTransactions();
        });
    }

    @DisplayName("JUnit test for fetching transactions based on cryptocurrency id")
    @Test
    void fetchTransactionsByCryptoId() throws Exception {
        // Arrange
        List<Transaction> records = new ArrayList<>(Arrays.asList(firstTransaction, secondTransaction));

        Mockito.when(transactionService.findByCurrencyId("bitcoin")).thenReturn(records);

        // Act
        List<Transaction> transactions = transactionService.findByCurrencyId("bitcoin");

        // Assert
        assertNotNull(transactions);

        // Arrange
        Mockito.when(transactionService.findByCurrencyId("bitcoin")).thenThrow(new TransactionNotFoundException("Cannot find transactions of a cryptocurrency"));

        // Act & Assert
        assertThrows(TransactionNotFoundException.class, () -> {
            transactionService.findByCurrencyId("bitcoin");
        });
    }

    @DisplayName("JUnit test for fetching transactions based on transaction id")
    @Test
    void fetchTransactionsById() throws Exception {
        try {
            Mockito.when(transactionRepository.findById(1)).thenReturn(Optional.ofNullable(firstTransaction));
            Optional<Transaction> transaction = transactionService.findTransactionById(1);
            assertNotNull(transaction);

            Mockito.when(transactionService.findTransactionById(7)).thenThrow(new TransactionNotFoundException("Cannot find transaction of id: 7"));
            assertThrows(TransactionNotFoundException.class, () -> {
                transactionService.findTransactionById(7);
            });
        }
        catch (Exception exception) {

        }
    }



    @DisplayName("JUnit test for adding a new transaction")
    @Test
    void addNewTransaction() throws Exception {
        // Arrange
        Transaction newTransaction = Transaction.builder()
                .id(3)
                .currencyId("ethereum")
                .type("sell")
                .symbol("ETH")
                .price(2098.23)
                .quantity(1.2)
                .date(LocalDateTime.now())
                .status("success")
                .build();

        Mockito.when(transactionService.addNewTransaction(newTransaction)).thenReturn(newTransaction);

        // Act
        Transaction transaction = transactionService.addNewTransaction(newTransaction);

        // Assert
        assertNotNull(transaction);

        // Arrange
        Mockito.when(transactionService.addNewTransaction(newTransaction)).thenThrow(new TransactionNotFoundException(new Exception()));

        // Act & Assert
        assertThrows(Exception.class, () -> {
            transactionService.addNewTransaction(newTransaction);
        });
    }
}
