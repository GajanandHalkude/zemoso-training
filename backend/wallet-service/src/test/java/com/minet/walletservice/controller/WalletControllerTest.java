package com.minet.walletservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.WalletNotFoundException;
import com.minet.walletservice.mapper.WalletMapper;
import com.minet.walletservice.service.WalletService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class WalletControllerTest {

    @Mock
    WalletService walletService;

    @InjectMocks
    WalletController walletController;

    @Autowired
    WebApplicationContext webApplicationContext;

    @Mock
    WalletMapper walletMapper;

    @Mock
    Wallet wallet;

    @BeforeEach
    void setUp(){
        wallet = new Wallet(1, "Wallet1", BigDecimal.valueOf(1000),
                BigDecimal.valueOf(1000), BigDecimal.valueOf(1000), "bitcoin");
    }

    public static String asJsonString(final Object object) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(object);
    }

    @Test
    void findWalletByIdTest() throws Exception{
        WalletDTO walletDTO = walletMapper.convertToWalletDTO(wallet);
        Mockito.when(walletService.findWalletById(1)).thenReturn(wallet);
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(walletController).build();
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/wallet/1").contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(walletDTO)))
                .andDo(MockMvcResultHandlers.print());
        Mockito.verify(walletService).findWalletById(1);
    }

    @Test
    void findWalletByIdErrorTest() throws Exception{
        Mockito.when(walletService.findWalletById(9))
                .thenThrow(new WalletNotFoundException("Wallet not found"));
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
        mockMvc.perform(get("/api/v1/wallet/9")).andExpect(status().is(400));
    }

    @Test
    void updateWalletTest() throws Exception{
        WalletDTO walletDTO = new WalletDTO(1, "Wallet1", 1000.0,
                1000.0, 1000.0, "bitcoin");

        Optional<Wallet> walletOptional = Optional.of(wallet);
        Mockito.when(walletService.findWalletById(1)).thenReturn(wallet);
        Mockito.when(walletService.saveWallet(wallet)).thenReturn(walletOptional.get());
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(walletController).build();
        mockMvc.perform(patch("/api/v1/wallet/1").content(asJsonString(walletDTO)).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    void findAllWalletsTest() throws Exception{
        List<Wallet> walletList = new ArrayList<>();
        walletList.add(wallet);
        List<WalletDTO> walletDTOList = new ArrayList<>();
        Mockito.when(walletService.findAllWallets()).thenReturn(walletList);
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(walletController).build();
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/wallet/").contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(walletDTOList)))
                .andDo(MockMvcResultHandlers.print());
        Mockito.verify(walletService).findAllWallets();
    }

}
