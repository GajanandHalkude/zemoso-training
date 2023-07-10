package com.minet.portfolioservice.controllertests;

import java.util.*;

import com.minet.portfolioservice.controller.TransactionController;
import com.minet.portfolioservice.entity.Transaction;
import com.minet.portfolioservice.service.MapperService;
import com.minet.portfolioservice.service.TransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TransactionControllerTest {

    private TransactionController transactionController;
    @Mock
    private TransactionService transactionService;
    @Mock
    private MapperService mapperService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        transactionController = new TransactionController(transactionService,mapperService);
    }

    @Test
    void getTransactions_shouldReturnListOfTransactions() {
        // Arrange
        List<Transaction> expectedTransactions = Arrays.asList(
                // Creating a list of expected transactions
                Transaction.builder().id(1).currencyId("USD").price(1000).quantity(1).build(),
                Transaction.builder().id(2).currencyId("EUR").price(2000).quantity(2).build(),
                Transaction.builder().id(3).currencyId("GBP").price(3000).quantity(3).build()
        );
        when(transactionService.findAllTransactions()).thenReturn(expectedTransactions);

        // Act
        List<Transaction> actualTransactions = transactionController.getTransactions();

        // Assert
        assertEquals(expectedTransactions, actualTransactions);
        verify(transactionService, times(1)).findAllTransactions();
    }


    @Test
    void getTransactionById_withValidId_shouldReturnTransaction() {
        // Arrange
        int id = 1;
        // Creating an expected transaction
        Transaction expectedTransaction = Transaction.builder()
                .id(id)
                .currencyId("USD")
                .price(22000).quantity(4).build();
        when(transactionService.findTransactionById(id)).thenReturn(Optional.of(expectedTransaction));

        // Act
        Transaction actualTransaction = transactionController.getTransactionById(id);

        // Assert
        assertEquals(expectedTransaction, actualTransaction);
        verify(transactionService, times(1)).findTransactionById(id);
    }


    @Test
    void getTransactionById_withInvalidId_shouldThrowException() {
        // Arrange
        int id = 100;
        // Mocking the transactionService to return an empty optional
        when(transactionService.findTransactionById(id)).thenReturn(Optional.empty());

        // Act and Assert
        // Asserting that a ResponseStatusException is thrown
        assertThrows(ResponseStatusException.class, () -> transactionController.getTransactionById(id));
        verify(transactionService, times(1)).findTransactionById(id);
    }

    @Test
    void findByCurrencyId_withValidCurrencyId_shouldReturnTransactions() {
        // Arrange
        String currencyId = "USD";
        // Creating a list of expected transactions
        List<Transaction> expectedTransactions = Arrays.asList(
                Transaction.builder().id(1).currencyId("USD").price(10000).quantity(1).build(),
                Transaction.builder().id(2).currencyId("USD").price(20000).quantity(2).build()
        );
        when(transactionService.findByCurrencyId(currencyId)).thenReturn(expectedTransactions);

        // Act
        ResponseEntity<List<Transaction>> response = transactionController.findByCurrencyId(currencyId);
        List<Transaction> actualTransactions = response.getBody();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedTransactions, actualTransactions);
        verify(transactionService, times(1)).findByCurrencyId(currencyId);
    }


    @Test
    void findByCurrencyId_withInvalidCurrencyId_shouldReturnNotFound() {
        // Arrange
        String currencyId = "GBP";
        // Mocking the transactionService to return an empty list
        when(transactionService.findByCurrencyId(currencyId)).thenReturn(Collections.emptyList());

        // Act
        ResponseEntity<List<Transaction>> response = transactionController.findByCurrencyId(currencyId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        verify(transactionService, times(1)).findByCurrencyId(currencyId);
    }
}
