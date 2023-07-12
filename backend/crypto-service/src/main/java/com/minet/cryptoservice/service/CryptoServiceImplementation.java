package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CryptoCurrencyDto;
import com.minet.cryptoservice.entity.CryptoCurrency;
import com.minet.cryptoservice.exception.CurrencyNotFoundException;
import com.minet.cryptoservice.repository.CryptoCurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CryptoServiceImplementation implements CryptoServiceInterface {
    @Autowired
    private CryptoCurrencyRepository cryptoCurrencyRepository;

    private final ModelMapper modelMapper;
    public CryptoServiceImplementation() {
        modelMapper = new ModelMapper();
    }
    @Override
    public List<CryptoCurrencyDto> getAllCurrencies() {
        List<CryptoCurrency> cryptoCurrency = cryptoCurrencyRepository.findAll();

        List<CryptoCurrencyDto> sortedCurrencies = cryptoCurrency.stream()
                .map(currency -> modelMapper.map(currency, CryptoCurrencyDto.class))
                .sorted(Comparator.comparing(CryptoCurrencyDto::getPrice).reversed())
                .collect(Collectors.toList());

        return sortedCurrencies;
    }
    @Override
    public CryptoCurrencyDto getCurrencyById(String id) {
        CryptoCurrency currency = cryptoCurrencyRepository.findById(id)
                .orElseThrow(() -> new CurrencyNotFoundException("cryptocurrency not found with id: " + id));
        return modelMapper.map(currency, CryptoCurrencyDto.class);
    }
}
