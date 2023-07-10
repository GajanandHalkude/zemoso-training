package com.minet.cryptoservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.cryptoservice.dto.CryptoCurrencyDto;
import com.minet.cryptoservice.entity.CryptoCurrency;
import com.minet.cryptoservice.exception.CurrencyNotFoundException;
import com.minet.cryptoservice.service.CryptoServiceImplementation;
import com.minet.cryptoservice.service.CryptoServiceInterface;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class CryptocurrencyControllerTest {

    @Mock
    CryptoServiceInterface cryptocurrencyService;

    @InjectMocks
    CryptoCurrencyController cryptocurrencyController;

    @Autowired
    WebApplicationContext webApplicationContext;

    @Mock
    private ModelMapper modelMapper;

    @Mock
    CryptoCurrency cryptocurrency;

    @BeforeEach
    void setUp() {
        cryptocurrency = new CryptoCurrency("bitcoin", "Bitcoin", "btc", "bitcoin", 1000, 1000, 1000, 1000, 1, 1000);
    }


    @Test
    void getAllCurrenciesTest() {
        List<CryptoCurrencyDto> currencyDtoList = new ArrayList<>();
        currencyDtoList.add(new CryptoCurrencyDto("bitcoin", "Bitcoin", "btc", "bitcoin", 1000, 1000, 1000, 1000, 1, 1000));
        currencyDtoList.add(new CryptoCurrencyDto("ethereum", "Ethereum", "eth", "ethereum", 2000, 2000, 2000, 2000, 2, 2000));

        Mockito.when(cryptocurrencyService.getAllCurrencies()).thenReturn(currencyDtoList);

        ResponseEntity<List<CryptoCurrencyDto>> response = cryptocurrencyController.getAllCurrencies();

        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
        List<CryptoCurrencyDto> responseBody = response.getBody();
        Assertions.assertNotNull(responseBody);
        Assertions.assertEquals(currencyDtoList.size(), responseBody.size());
        Assertions.assertEquals(currencyDtoList, responseBody);
        Mockito.verify(cryptocurrencyService).getAllCurrencies();
    }

    @Test
    void getCurrencyById_ExistingIdTest() {
        String id = "bitcoin";
        CryptoCurrencyDto currencyDto = new CryptoCurrencyDto("bitcoin", "Bitcoin", "btc", "bitcoin", 1000, 1000, 1000, 1000, 1, 1000);

        Mockito.when(cryptocurrencyService.getCurrencyById(id)).thenReturn(currencyDto);
        ResponseEntity<CryptoCurrencyDto> response = cryptocurrencyController.getTransactionById(id);
        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
        CryptoCurrencyDto responseBody = response.getBody();
        Assertions.assertNotNull(responseBody);
        Assertions.assertEquals(currencyDto, responseBody);
        Mockito.verify(cryptocurrencyService).getCurrencyById(id);
    }

    @Test
    void getCurrencyById_NonexistentIdTest() {
        String id = "invalid-id";
        Mockito.when(cryptocurrencyService.getCurrencyById(id)).thenThrow(new CurrencyNotFoundException("not found"));

        ResponseEntity<CryptoCurrencyDto> response = cryptocurrencyController.getTransactionById(id);

        Assertions.assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        Assertions.assertNull(response.getBody());
        Mockito.verify(cryptocurrencyService).getCurrencyById(id);
    }
    @Test
    void getCurrencyById_NoIdTest() {
        String id = null;
        Mockito.when(cryptocurrencyService.getCurrencyById(id)).thenThrow(new CurrencyNotFoundException("not found"));
        ResponseEntity<CryptoCurrencyDto> response = cryptocurrencyController.getTransactionById(id);
        Assertions.assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        Assertions.assertNull(response.getBody());
        Mockito.verify(cryptocurrencyService).getCurrencyById(id);
    }


}