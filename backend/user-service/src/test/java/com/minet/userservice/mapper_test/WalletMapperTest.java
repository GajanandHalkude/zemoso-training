package com.minet.userservice.mapper_test;

import com.minet.userservice.dto.WalletDto;
import com.minet.userservice.mapper.WalletMapper;
import com.minet.userservice.vo.Wallet;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(WalletMapper.class)
class WalletMapperTest {

    @MockBean
    private ModelMapper modelMapper;
    @Autowired
    private WalletMapper walletMapper;


    private Wallet firstWallet;
    private Wallet secondWallet;

    private WalletDto firstWalletDto;

    private WalletDto secondWalletDto;

    @BeforeEach
    void setup() {
        firstWallet = Wallet.builder()
                .id(1)
                .name("bitcoin")
                .currency_Id("bitcoin")
                .balance(1)
                .avg_value(3000)
                .invested_amount(3000)
                .build();

        secondWallet = Wallet.builder()
                .id(1)
                .name("xrp")
                .currency_Id("xrp")
                .balance(1)
                .avg_value(3000)
                .invested_amount(3000)
                .build();

        firstWalletDto = WalletDto.builder()
                .id(1)
                .name("bitcoin")
                .currency_id("bitcoin")
                .balance(1)
                .avg_value(3000)
                .invested_amount(3000)
                .build();

        secondWalletDto = WalletDto.builder()
                .id(1)
                .name("xrp")
                .currency_id("xrp")
                .balance(1)
                .avg_value(3000)
                .invested_amount(3000)
                .build();
    }

    @DisplayName("JUnit test for converting entity to dto")
    @Test
    void entityToDtoTest() {
        Mockito.when(walletMapper.convertToWalletDTO(firstWallet)).thenReturn(firstWalletDto);
        WalletDto walletDto = walletMapper.convertToWalletDTO(firstWallet);
        assertNotNull(walletDto);

        Mockito.when(modelMapper.map(firstWallet,WalletDto.class)).thenThrow(new NullPointerException("NullPointerException in converting to dto"));
        Exception exception = assertThrows(NullPointerException.class, () -> {
            walletMapper.convertToWalletDTO(firstWallet);
        });
        assertEquals("NullPointerException in converting to dto", exception.getMessage());

    }

    @DisplayName("JUnit test for converting dto to entity")
    @Test
    void dtoToEntityTest() throws Exception {
        Mockito.when(walletMapper.convertToWallet(secondWalletDto)).thenReturn(secondWallet);
        Wallet wallet = walletMapper.convertToWallet(secondWalletDto);
        assertNotNull(wallet);

        Mockito.when(walletMapper.convertToWallet(secondWalletDto)).thenThrow(new NullPointerException("NullPointerException in converting to entity"));
        Exception exception = assertThrows(NullPointerException.class, () -> {
            walletMapper.convertToWallet(secondWalletDto);
        });
        assertEquals("NullPointerException in converting to entity", exception.getMessage());

    }
}
