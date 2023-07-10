package com.minet.userservice.controller_test;

import com.minet.userservice.controller.UserWatchlistController;
import com.minet.userservice.dao.UserWatchlistRepository;
import com.minet.userservice.service.UserService;
import com.minet.userservice.service.UserWatchlistService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserWatchlistController.class)
class UserWatchlistControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ModelMapper modelMapper;

    @MockBean
    private UserService userService;

    @MockBean
    private UserWatchlistService userWatchlistService;

    @MockBean
    private UserWatchlistRepository userWatchlistRepository;

    @Autowired
    private UserWatchlistController userWatchlistController;

    private List<String> userWatchlist;

    @BeforeEach
    void setup() {
        userWatchlist = new ArrayList<>(Arrays.asList("bitcoin", "xrp"));
    }

    @DisplayName("JUnit test to retrieve a user's watchlist")
    @Test
    void getUserWatchlist() throws Exception {
        Mockito.when(userWatchlistController.getUserWatchlist(1)).thenReturn(userWatchlist);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/1/watchlist/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        Mockito.when(userWatchlistController.getUserWatchlist(4)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No watchlist found"));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/4/watchlist/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @DisplayName("JUnit test to add a new coin to watchlist")
    @Test
    void addCoinToWatchlist() throws Exception {
        String coin = "ethereum";

        Mockito.when(userWatchlistController.addCryptoIdForUserWatchlist(1, coin)).thenReturn(coin);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/v1/users/1/watchlist/")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(coin);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk());

        Mockito.when(userWatchlistController.addCryptoIdForUserWatchlist(5,coin)).thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add crypto to watchlist"));

        MockMvcRequestBuilders.post("/api/v1/users/5/watchlist/")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(coin);

        mockMvc.perform(mockRequest)
                .andExpect(status().isBadRequest());
    }

    @DisplayName("JUnit test to delete coin from watchlist")
    @Test
    void deleteCoinFromUserWatchlist() throws Exception {
        String coin = "xrp";

        Mockito.when(userWatchlistController.deleteCryptoIdForUserWatchlist(1, coin)).thenReturn(coin);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.delete("/api/v1/users/1/watchlist/xrp")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(coin);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk());

        Mockito.when(userWatchlistController.deleteCryptoIdForUserWatchlist(1,"ethereum")).thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to delete coin from watchlist"));

        MockHttpServletRequestBuilder mockRequestException = MockMvcRequestBuilders.delete("/api/v1/users/1/watchlist/ethereum")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content("ethereum");

        mockMvc.perform(mockRequestException)
                .andExpect(status().isBadRequest());

    }
}
