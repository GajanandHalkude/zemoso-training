package com.minet.walletservice.service;

import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.WalletNotFoundException;
import com.minet.walletservice.repository.WalletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class WalletServiceTest {

    @Mock
    private WalletRepository walletRepository;

    private WalletService walletService;

    @BeforeEach
    void setUp() {
        walletService = new WalletService(walletRepository);
    }

    @DisplayName("JUnit test for finding a wallet by ID")
    @Test
    void testFindWalletById() {
        Wallet wallet = new Wallet(1, "My Wallet", BigDecimal.valueOf(1000.0), BigDecimal.valueOf(500.0),
                BigDecimal.valueOf(2000.0), "USD");
        when(walletRepository.findById(1)).thenReturn(Optional.of(wallet));

        Wallet result = walletService.findWalletById(1);

        assertNotNull(result);
        assertEquals(wallet, result);

        verify(walletRepository, times(1)).findById(1);
    }

    @DisplayName("JUnit test for finding a non-existent wallet by ID")
    @Test
    void testFindWalletByIdNotFound() {
        when(walletRepository.findById(2)).thenReturn(Optional.empty());

        assertThrows(WalletNotFoundException.class, () -> {
            walletService.findWalletById(2);
        });

        verify(walletRepository, times(1)).findById(2);
    }

    @DisplayName("JUnit test for saving a wallet")
    @Test
    void testSaveWallet() {
        Wallet wallet = new Wallet(1, "My Wallet", BigDecimal.valueOf(1000.0), BigDecimal.valueOf(500.0),
                BigDecimal.valueOf(2000.0), "USD");
        when(walletRepository.save(wallet)).thenReturn(wallet);

        Wallet result = walletService.saveWallet(wallet);

        assertNotNull(result);
        assertEquals(wallet, result);

        verify(walletRepository, times(1)).save(wallet);
    }

    @DisplayName("JUnit test for finding all wallets")
    @Test
    void testFindAllWallets() {
        Wallet wallet1 = new Wallet(1, "Wallet 1", BigDecimal.valueOf(1000.0), BigDecimal.valueOf(500.0),
                BigDecimal.valueOf(2000.0), "USD");
        Wallet wallet2 = new Wallet(2, "Wallet 2", BigDecimal.valueOf(2000.0), BigDecimal.valueOf(1000.0),
                BigDecimal.valueOf(4000.0), "EUR");

        List<Wallet> wallets = new ArrayList<>();
        wallets.add(wallet1);
        wallets.add(wallet2);

        when(walletRepository.findAll()).thenReturn(wallets);

        List<Wallet> result = walletService.findAllWallets();

        assertNotNull(result);
        assertEquals(wallets, result);

        verify(walletRepository, times(1)).findAll();
    }
}
