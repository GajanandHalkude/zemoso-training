package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.CryptoCurrencyDto;
import com.minet.cryptoservice.exception.CurrencyNotFoundException;
import com.minet.cryptoservice.service.CryptoServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/currency")
public class CryptoCurrencyController {
    @Autowired
    private CryptoServiceInterface cryptoServiceInterface;
    @GetMapping
    public ResponseEntity<List<CryptoCurrencyDto>> getAllCurrencies() {
        List<CryptoCurrencyDto> currenciesDtos = cryptoServiceInterface.getAllCurrencies();
        return ResponseEntity.ok(currenciesDtos);
    }
    @GetMapping("/{id}")
    public ResponseEntity<CryptoCurrencyDto> getTransactionById(@PathVariable String id) {
        try {
            CryptoCurrencyDto currencyDto = cryptoServiceInterface.getCurrencyById(id);
            return ResponseEntity.ok(currencyDto);
        } catch (CurrencyNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
