package com.minet.userservice.controller_test;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.userservice.controller.UserTransactionsController;
import com.minet.userservice.dao.UserTransactionRepository;
import com.minet.userservice.dto.TransactionDto;
import com.minet.userservice.mapper.TransactionMapper;
import com.minet.userservice.service.UserService;
import com.minet.userservice.service.UserTransactionService;
import com.minet.userservice.vo.Transaction;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserTransactionsController.class)
class UserTransactionsControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    @MockBean
    private TransactionMapper transactionMapper;

    @MockBean
    private ModelMapper modelMapper;

    @MockBean
    private UserService userService;

    @MockBean
    private UserTransactionService userTransactionService;

    @MockBean
    private UserTransactionRepository userTransactionRepository;

    @Autowired
    private UserTransactionsController userTransactionsController;

    private Transaction firstTransaction;
    private Transaction secondTransaction;

    @BeforeEach
    void setup() {
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

    @DisplayName("JUnit test to get all user transactions")
    @Test
    void getAllUserTransactions() throws Exception {
        List<Transaction> records = new ArrayList<>(Arrays.asList(firstTransaction, secondTransaction));

        List<TransactionDto> dtoRecords = records.stream()
                .map(transactionMapper::convertToDto)
                .collect(Collectors.toList());

        Mockito.when(userTransactionsController.getAllUserTransactions(1)).thenReturn(dtoRecords);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/users/1/transactions/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));

        Mockito.when(userTransactionsController.getAllUserTransactions(1)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No transactions found"));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/users/1/transactions/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @DisplayName("JUnit test to save user transaction")
    @Test
    void addUserTransactions() throws Exception {
        TransactionDto newTransactionDto = TransactionDto.builder()
                .id(3)
                .currencyId("ethereum")
                .type("sell")
                .symbol("ETH")
                .price(2098.23)
                .quantity(1.2)
                .date(LocalDateTime.now())
                .status("success")
                .build();

        Mockito.when(userTransactionsController.saveUserTransactions(1, newTransactionDto)).thenReturn(newTransactionDto);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/users/1/transactions/")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(newTransactionDto));

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",  Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.symbol", Matchers.is("ETH")));

        Mockito.when(userTransactionsController.saveUserTransactions(1, newTransactionDto)).thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add a transaction"));

        MockMvcRequestBuilders.post("/users/1/transactions/")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(newTransactionDto));

        mockMvc.perform(mockRequest)
                .andExpect(status().isBadRequest());
    }

    @DisplayName("JUnit test to get user transactions by id")
    @Test
    void getUserTransactionById() throws Exception {
        TransactionDto transactionDto = transactionMapper.convertToDto(firstTransaction);

        Mockito.when(userTransactionsController.getUserTransactionsById(1,1)).thenReturn(transactionDto);
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/users/1/transactions/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        Mockito.when(userTransactionsController.getUserTransactionsById(300, 89)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No transactions with the given id found"));
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/users/300/transactions/89")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }
}
