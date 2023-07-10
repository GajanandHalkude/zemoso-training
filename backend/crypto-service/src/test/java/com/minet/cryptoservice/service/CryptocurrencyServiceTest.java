package com.minet.cryptoservice.service;


import com.minet.cryptoservice.dto.CryptoCurrencyDto;
import com.minet.cryptoservice.entity.CryptoCurrency;
import com.minet.cryptoservice.exception.CurrencyNotFoundException;
import com.minet.cryptoservice.repository.CryptoCurrencyRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@SpringBootTest
class CryptocurrencyServiceTest {

    @Mock
    private CryptoCurrencyRepository cryptocurrencyRepository;

    @InjectMocks
    private CryptoServiceImplementation cryptocurrencyService;

    CryptoCurrency cryptocurrency;

    @BeforeEach
    void initUserCase(){
        cryptocurrency=new CryptoCurrency("bitcoin","Bitcoin","btc","bitcoin",1000,1000,1000,1000,1,1000);
    }
    @Test
    void getAllCurrencies_EmptyListTest() {
        Mockito.when(cryptocurrencyRepository.findAll()).thenReturn(Collections.emptyList());
        List<CryptoCurrencyDto> cryptoCurrencyDtoList = cryptocurrencyService.getAllCurrencies();
        Assertions.assertNotNull(cryptoCurrencyDtoList);
        Assertions.assertTrue(cryptoCurrencyDtoList.isEmpty());
        Mockito.verify(cryptocurrencyRepository).findAll();
    }



    @Test
    void findCryptoByIdTest(){
        Mockito.when(cryptocurrencyRepository.findById("bitcoin")).thenReturn(Optional.of(cryptocurrency));
        Assertions.assertEquals("Bitcoin",cryptocurrencyService.getCurrencyById("bitcoin").getName());
    }

    @Test
    void findCryptoByIdExceptionTest(){
        Mockito.when(cryptocurrencyRepository.findById("bitcoin")).thenReturn(Optional.empty());
        Assertions.assertThrows(CurrencyNotFoundException.class,()->cryptocurrencyService.getCurrencyById("bitcoin"));
    }

}