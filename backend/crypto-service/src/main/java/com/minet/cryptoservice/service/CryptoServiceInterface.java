package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CryptoCurrencyDto;

import java.util.List;

public interface CryptoServiceInterface {
    List<CryptoCurrencyDto> getAllCurrencies();
    CryptoCurrencyDto getCurrencyById(String id);
}
