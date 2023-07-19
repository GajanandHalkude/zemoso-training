package com.minet.userservice.service_test;

import com.minet.userservice.dao.UserWalletRepository;
import com.minet.userservice.dto.WalletDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.entity.UserWallet;
import com.minet.userservice.exception.WalletException;
import com.minet.userservice.mapper.WalletMapper;
import com.minet.userservice.service.UserWalletService;
import com.minet.userservice.vo.Wallet;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(UserWalletService.class)
class UserWalletServiceTest {

    @Value("${wallet.url}")
    private String walletUrl;
    @MockBean
    RestTemplate restTemplate;

    @MockBean
    private WalletMapper walletMapper;

    @MockBean
    UserWalletRepository userWalletRepository;

    @Autowired
    UserWalletService userWalletService;

    private User user;
    private Wallet wallet;
    private UserWallet userWallet;

    @BeforeEach
    void setup() {
        user = User.builder()
                .id(1)
                .name("User")
                .password("Testing@123")
                .email("acb@gmail.com")
                .avatar("avatar")
                .build();
        wallet = Wallet.builder()
                .id(1)
                .currencyId("bitcoin")
                .avgValue(5000)
                .investedAmount(5000)
                .balance(1)
                .name("bitcoin")
                .build();
        userWallet = UserWallet.builder()
                .id(1)
                .user(user)
                .walletId(1)
                .build();
    }

    @DisplayName("JUnit tests for UserWalletService getAllWalletForUser")
    @Test
    void testGetAllWalletForUser(){
        Mockito.when(userWalletRepository.findByUserId(1)).thenReturn(Stream.of(userWallet).collect(Collectors.toList()));
        Mockito.when(restTemplate.getForObject(walletUrl + userWallet.getWalletId(), Wallet.class)).thenReturn(wallet);
        List<WalletDto> walletList = userWalletService.getAllWalletForUser(1);
        assertEquals(1,walletList.size());

        Mockito.when(restTemplate.getForObject(walletUrl + userWallet.getWalletId(), Wallet.class)).thenReturn(null);
        Exception exception = assertThrows(WalletException.class, () -> {
            userWalletService.getAllWalletForUser(1);
        });
        assertEquals("wallets not found", exception.getMessage());
    }

    @DisplayName("JUnit tests for UserWalletService getWalletForUserByWalletId")
    @Test
    void testGetWalletForUserByWalletId(){
        Mockito.when(userWalletRepository.findByUserIdAndWalletId(1,1)).thenReturn(userWallet);
        Mockito.when(restTemplate.getForObject(walletUrl + userWallet.getWalletId(), Wallet.class)).thenReturn(wallet);
        Wallet wallet1 = userWalletService.getWalletForUserByWalletId(1,1);
        assertNotNull(wallet1);

        Mockito.when(restTemplate.getForObject(walletUrl + userWallet.getWalletId(), Wallet.class)).thenReturn(null);
        Exception exception = assertThrows(WalletException.class, () -> {
            userWalletService.getWalletForUserByWalletId(1,1);
        });
        assertEquals("wallet not found",exception.getMessage());
    }

    @DisplayName("JUnit tests for UserWalletService saveWallet")
    @Test
    void testSaveWallet(){
        Mockito.when(restTemplate.postForObject(walletUrl, wallet, Wallet.class)).thenReturn(wallet);
        userWalletService.saveWallet(user,wallet);
        assertNotNull(wallet);

        Mockito.when(restTemplate.postForObject(walletUrl, wallet, Wallet.class)).thenReturn(null);
        Exception exception = assertThrows(WalletException.class, () -> {
            userWalletService.saveWallet(user,wallet);
        });
        assertEquals("Wallet not found",exception.getMessage());
    }

    @DisplayName("JUnit tests for UserWalletService updateWallet")
    @Test
    void testUpdateWallet(){
        Mockito.when(restTemplate.patchForObject(walletUrl + 1, wallet, Wallet.class)).thenReturn(wallet);
        userWalletService.updateWallet(wallet,1);
        assertNotNull(wallet);

        Mockito.when(restTemplate.patchForObject(walletUrl + 1, wallet, Wallet.class)).thenReturn(null);
        Exception exception = assertThrows(WalletException.class, () -> {
            userWalletService.updateWallet(wallet,1);
        });
        assertEquals("updating wallet failed",exception.getMessage());
    }
}
