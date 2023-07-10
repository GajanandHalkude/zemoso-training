package com.minet.userservice.controller_test;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.userservice.controller.UserWalletController;
import com.minet.userservice.dao.UserWalletRepository;
import com.minet.userservice.dto.WalletDto;
import com.minet.userservice.mapper.WalletMapper;
import com.minet.userservice.service.UserService;
import com.minet.userservice.service.UserWalletService;
import com.minet.userservice.vo.Wallet;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserWalletController.class)
class UserWalletControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    @MockBean
    private WalletMapper walletMapper;

    @MockBean
    private UserWalletService userWalletService;

    @MockBean
    private UserService userService;

    @MockBean
    private UserWalletRepository userWalletRepository;

    @Autowired
    private UserWalletController userWalletController;

    private Wallet firstWallet;

    private Wallet secondWallet;

    @BeforeEach
    void setup() {

        firstWallet = Wallet.builder()
                .id(1)
                .name("Cash")
                .balance(50000)
                .avgValue(1)
                .investedAmount(50000)
                .currencyId(null)
                .build();

        secondWallet = Wallet.builder()
                .id(2)
                .name("Bitcoin")
                .balance(16000)
                .avgValue(1)
                .investedAmount(16000)
                .currencyId("bitcoin")
                .build();

    }

    @DisplayName("JUnit test for fetching all user wallets")
    @Test
    void getAllUserWallets() throws Exception {
        List<Wallet> records = new ArrayList<>(Arrays.asList(firstWallet, secondWallet));

        List<WalletDto> dtoRecords = records.stream()
                .map(walletMapper::convertToWalletDTO)
                .collect(Collectors.toList());

        Mockito.when(userWalletController.getAllUserWallets(1)).thenReturn(dtoRecords);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/1/wallets/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));

        Mockito.when(userWalletController.getAllUserWallets(5)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No wallets found"));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/5/wallets/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @DisplayName("JUnit test for adding a new wallet")
    @Test
    void saveUserWallet() throws Exception {
        WalletDto newWalletDto = WalletDto.builder()
                .id(3)
                .name("Ethereum")
                .balance(50000.7)
                .avgValue(1.1)
                .investedAmount(50000.7)
                .currencyId("ethereum")
                .build();

        Mockito.when(userWalletController.saveUserWallet(1, newWalletDto)).thenReturn(newWalletDto);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/v1/users/1/wallets/")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(newWalletDto));

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Matchers.is("Ethereum")));

       Mockito.when(userWalletController.saveUserWallet(5, newWalletDto)).thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add wallet"));

        MockHttpServletRequestBuilder mockRequestException = MockMvcRequestBuilders.post("/api/v1/users/5/wallets/")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(newWalletDto));

        mockMvc.perform(mockRequestException)
                .andExpect(status().isBadRequest());
    }

    @DisplayName("JUnit test for updating user wallet")
    @Test
    void updateUserWallet() throws Exception {
        WalletDto newWalletDto = WalletDto.builder()
                .id(2)
                .name("Bitcoin")
                .balance(10000)
                .avgValue(0.6)
                .investedAmount(10000)
                .currencyId("bitcoin")
                .build();

        Wallet newWallet = Wallet.builder()
                .id(2)
                .name("Bitcoin")
                .balance(10000)
                .avgValue(0.6)
                .investedAmount(10000)
                .currencyId("bitcoin")
                .build();

        Mockito.when(walletMapper.convertToWallet(Mockito.any())).thenReturn(newWallet);

        Mockito.when(userWalletController.updateUserWallet(1, 2, Mockito.any())).thenReturn(newWalletDto);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.patch("/api/v1/users/1/wallets/2")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(newWalletDto));

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Matchers.is("Bitcoin")));

        Mockito.when(userWalletController.updateUserWallet(1, 2, newWalletDto)).thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to update wallet"));

        MockHttpServletRequestBuilder mockExceptionRequest = MockMvcRequestBuilders.patch("/api/v1/users/1/wallets/2")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(newWalletDto));

        mockMvc.perform(mockExceptionRequest)
                .andExpect(status().isBadRequest());

    }

    @DisplayName("JUnit test for fetching a particular wallet of the user")
    @Test
    void getUserWalletById() throws Exception {
        WalletDto secondWalletDto = walletMapper.convertToWalletDTO(secondWallet);

        Mockito.when(userWalletController.getUserWalletByWalletId(1, 2)).thenReturn(secondWalletDto);
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/1/wallets/2")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        Mockito.when(userWalletController.getUserWalletByWalletId(300, 89)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No wallets with the given id found"));
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/300/wallets/89")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

}
