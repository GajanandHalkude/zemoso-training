package com.minet.userservice.service_test;

import com.minet.userservice.dao.UserTransactionRepository;
import com.minet.userservice.entity.User;
import com.minet.userservice.entity.UserTransaction;
import com.minet.userservice.exception.TransactionException;
import com.minet.userservice.mapper.TransactionMapper;
import com.minet.userservice.service.UserTransactionService;
import com.minet.userservice.vo.Transaction;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(UserTransactionService.class)
class UserTransactionServiceTest {

    @Value("${transaction.url}")
    private String transactionUrl;
    @MockBean
    UserTransactionRepository userTransactionRepository;

    @MockBean
    TransactionMapper transactionMapper;
    @MockBean
    RestTemplate restTemplate;

    @Autowired
    UserTransactionService userTransactionService;

    private UserTransaction userTransaction;
    private Transaction transaction;
    private User user;


    @BeforeEach
    void setup() {
        user = User.builder()
                .id(1)
                .name("user1")
                .password("Testing@123")
                .email("abc@gmail.com")
                .avatar("avatar")
                .build();
        transaction = Transaction.builder()
                .id(1)
                .currencyId("bitcoin")
                .type("sell")
                .symbol("BTC")
                .price(2343.98)
                .quantity(0.2)
                .date(LocalDateTime.now())
                .status("success")
                .build();
        userTransaction = UserTransaction.builder()
                .user(user)
                .transactionId(1)
                .id(1)
                .build();
    }

    @DisplayName("JUnit tests for UserTransactionService getAllTransactionsForUser")
    @Test
    void testGetAllTransactionsForUser() {
        Mockito.when(userTransactionRepository.findByUserId(1)).thenReturn(Stream.of(userTransaction).collect(Collectors.toList()));
        Exception exception = assertThrows(TransactionException.class, () -> {
            userTransactionService.getAllTransactionsForUser(1);
        });
        assertEquals("Transactions not found", exception.getMessage());

        Mockito.when(restTemplate.getForObject(transactionUrl + userTransaction.getTransactionId(), Transaction.class)).thenReturn(transaction);
        userTransactionService.getAllTransactionsForUser(1);



        Mockito.when(userTransactionRepository.findByUserId(1)).thenReturn(new ArrayList<>());
        Exception exception1 = assertThrows(TransactionException.class, () -> {
            userTransactionService.getAllTransactionsForUser(1);
        });
        assertEquals("Transactions not found", exception1.getMessage());
    }

    @DisplayName("JUnit tests for UserTransactionService getTransactionForUserByTransactionId")
    @Test
    void testGetTransactionForUserByTransactionId() {
        Mockito.when(userTransactionRepository.findByUserIdAndTransactionId(1,1)).thenReturn(userTransaction);
        Mockito.when(restTemplate.getForObject(transactionUrl + userTransaction.getTransactionId(), Transaction.class)).thenReturn(transaction);
        userTransactionService.getTransactionForUserByTransactionId(1,1);

        Mockito.when(restTemplate.getForObject(transactionUrl + userTransaction.getTransactionId(), Transaction.class)).thenThrow(new TransactionException("not found"));
        Exception exception = assertThrows(TransactionException.class, () -> {
            userTransactionService.getTransactionForUserByTransactionId(1,1);
        });
        assertEquals("Transaction not found with id: 1",exception.getMessage());
    }

    @DisplayName("JUnit tests for UserTransactionService saveTransaction")
    @Test
    void testSaveTransaction() {
        Mockito.when(restTemplate.postForObject(transactionUrl, transaction, Transaction.class)).thenReturn(null);
        Exception exception = assertThrows(TransactionException.class, () -> {
            userTransactionService.saveTransaction(user,transaction);
        });
        assertEquals("Unable to add a  transaction",exception.getMessage());

        Mockito.when(restTemplate.postForObject(transactionUrl, transaction, Transaction.class)).thenReturn(transaction);
        Transaction transaction1 = userTransactionService.saveTransaction(user,transaction);
        assertNotNull(transaction1);


    }
}
