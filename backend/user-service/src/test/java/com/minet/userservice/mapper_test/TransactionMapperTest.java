package com.minet.userservice.mapper_test;

import com.minet.userservice.dto.TransactionDto;
import com.minet.userservice.mapper.TransactionMapper;
import com.minet.userservice.vo.Transaction;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

@WebMvcTest(TransactionMapper.class)
class TransactionMapperTest {

    @MockBean
    private ModelMapper modelMapper;
    @Autowired
    private TransactionMapper transactionMapper;


    private Transaction firstTransaction;
    private Transaction secondTransaction;

    private TransactionDto firstTransactionDto;

    private TransactionDto secondTransactionDto;

    @BeforeEach
    void setup() {
        firstTransaction = Transaction.builder()
                .id(1)
                .currency_Id("bitcoin")
                .type("sell")
                .symbol("BTC")
                .price(2343.98)
                .quantity(0.2)
                .date(LocalDateTime.now())
                .status("success")
                .build();

        secondTransaction = Transaction.builder()
                .id(2)
                .currency_Id("bitcoin")
                .type("buy")
                .symbol("BTC")
                .price(254.98)
                .quantity(0.1)
                .date(LocalDateTime.now())
                .status("success")
                .build();

        firstTransactionDto = TransactionDto.builder()
                .id(1)
                .currency_id("bitcoin")
                .type("sell")
                .symbol("BTC")
                .price(2343.98)
                .quantity(0.2)
                .date(LocalDateTime.now())
                .status("success")
                .build();

        secondTransactionDto = TransactionDto.builder()
                .id(2)
                .currency_id("bitcoin")
                .type("buy")
                .symbol("BTC")
                .price(254.98)
                .quantity(0.1)
                .date(LocalDateTime.now())
                .status("success")
                .build();
    }

    @DisplayName("JUnit test for converting entity to dto")
    @Test
    void entityToDtoTest() {
        Mockito.when(transactionMapper.convertToDto(firstTransaction)).thenReturn(firstTransactionDto);
        TransactionDto transactionDto = transactionMapper.convertToDto(firstTransaction);
        assertNotNull(transactionDto);

        Mockito.when(modelMapper.map(firstTransaction,TransactionDto.class)).thenThrow(new NullPointerException("NullPointerException in converting to dto"));
        System.out.println("I'm here");
        Exception exception = assertThrows(NullPointerException.class, () -> {
            transactionMapper.convertToDto(firstTransaction);
        });
        assertEquals("NullPointerException in converting to dto", exception.getMessage());

    }

    @DisplayName("JUnit test for converting dto to entity")
    @Test
    void dtoToEntityTest() throws Exception {
        Mockito.when(transactionMapper.convertToEntity(secondTransactionDto)).thenReturn(secondTransaction);
        Transaction transaction = transactionMapper.convertToEntity(secondTransactionDto);
        assertNotNull(transaction);

        Mockito.when(transactionMapper.convertToEntity(secondTransactionDto)).thenThrow(new NullPointerException("NullPointerException in converting to entity"));
        Exception exception = assertThrows(NullPointerException.class, () -> {
            transactionMapper.convertToEntity(secondTransactionDto);
        });
        assertEquals("NullPointerException in converting to entity", exception.getMessage());

    }
}
