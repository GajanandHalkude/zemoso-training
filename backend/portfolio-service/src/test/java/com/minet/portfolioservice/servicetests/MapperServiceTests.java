package com.minet.portfolioservice.servicetests;
import com.minet.portfolioservice.dto.TransactionDto;
import com.minet.portfolioservice.entity.Transaction;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import com.minet.portfolioservice.service.MapperService;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(MapperService.class)
class MapperServiceTests {

    @Autowired
    private MapperService mapperService;

    @MockBean
    private ModelMapper modelMapper;

    private Transaction firstTransaction;
    private Transaction secondTransaction;

    private TransactionDto firstTransactionDto;
    private TransactionDto secondTransactionDto;

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

        firstTransactionDto = TransactionDto.builder()
                .id(1)
                .currencyId("bitcoin")
                .type("sell")
                .symbol("BTC")
                .price(2343.98)
                .quantity(0.2)
                .date(LocalDateTime.now())
                .status("success").build();

        secondTransactionDto = TransactionDto.builder()
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

    @DisplayName("Convert entity to DTO")
    @Test
    void convertToDtoTest() {
        // Arrange
        Mockito.when(modelMapper.map(firstTransaction, TransactionDto.class)).thenReturn(firstTransactionDto);

        // Act
        TransactionDto transactionDto = mapperService.convertToDto(firstTransaction);

        // Assert
        assertNotNull(transactionDto);
        assertEquals(firstTransactionDto, transactionDto);
    }

    @DisplayName("Convert entity to DTO throws exception")
    @Test
    void convertToDtoThrowsExceptionTest() {
        // Arrange
        Mockito.when(modelMapper.map(firstTransaction, TransactionDto.class)).thenThrow(new NullPointerException("NullPointerException in converting to dto"));

        // Act & Assert
        Exception exception = assertThrows(NullPointerException.class, () -> {
            mapperService.convertToDto(firstTransaction);
        });

        assertEquals("NullPointerException in converting to dto", exception.getMessage());
    }

    @DisplayName("Convert multiple entities to DTOs")
    @Test
    void convertToDtoMultipleEntitiesTest() {
        // Arrange
        Mockito.when(modelMapper.map(firstTransaction, TransactionDto.class)).thenReturn(firstTransactionDto);
        Mockito.when(modelMapper.map(secondTransaction, TransactionDto.class)).thenReturn(secondTransactionDto);

        // Act
        TransactionDto firstDto = mapperService.convertToDto(firstTransaction);
        TransactionDto secondDto = mapperService.convertToDto(secondTransaction);

        // Assert
        assertNotNull(firstDto);
        assertNotNull(secondDto);
        assertEquals(firstTransactionDto, firstDto);
        assertEquals(secondTransactionDto, secondDto);
    }
}

