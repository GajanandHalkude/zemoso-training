package com.minet.walletservice.mapper;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.Wallet;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.math.BigDecimal;

class WalletMapperTest {
    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private WalletMapper walletMapper;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void convertToWalletDTO_shouldMapWalletToWalletDTO() {
        
        Wallet wallet = new Wallet();
        wallet.setId(1);
        wallet.setName("Test Wallet");
        wallet.setBalance(BigDecimal.valueOf(100.0));
        wallet.setAvgValue(BigDecimal.valueOf(50.0));
        wallet.setInvestedAmount(BigDecimal.valueOf(500.0));
        wallet.setCurrencyId("USD");

        WalletDTO expectedDTO = new WalletDTO();
        expectedDTO.setId(1);
        expectedDTO.setName("Test Wallet");
        expectedDTO.setBalance(100.0);
        expectedDTO.setAvgValue(50.0);
        expectedDTO.setInvestedAmount(500.0);
        expectedDTO.setCurrencyId("USD");


        Mockito.when(modelMapper.map(wallet, WalletDTO.class)).thenReturn(expectedDTO);
        WalletDTO actualDTO = walletMapper.convertToWalletDTO(wallet);
        Assertions.assertEquals(expectedDTO, actualDTO);
    }

    @Test
    void convertToWallet_shouldMapWalletDTOToWallet() {
        // Arrange
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setId(1);
        walletDTO.setName("Test Wallet");
        walletDTO.setBalance(100.0);
        walletDTO.setAvgValue(50.0);
        walletDTO.setInvestedAmount(500.0);
        walletDTO.setCurrencyId("USD");

        Wallet expectedWallet = new Wallet();
        expectedWallet.setId(1);
        expectedWallet.setName("Test Wallet");
        expectedWallet.setBalance(BigDecimal.valueOf(100.0));
        expectedWallet.setAvgValue(BigDecimal.valueOf(50.0));
        expectedWallet.setInvestedAmount(BigDecimal.valueOf(500.0));
        expectedWallet.setCurrencyId("USD");
        
        Mockito.when(modelMapper.map(walletDTO, Wallet.class)).thenReturn(expectedWallet);
        Wallet actualWallet = walletMapper.convertToWallet(walletDTO);
        Assertions.assertEquals(expectedWallet, actualWallet);
    }
}

