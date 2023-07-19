package com.minet.userservice.service_test;

import com.minet.userservice.dao.UserWatchlistRepository;
import com.minet.userservice.entity.User;
import com.minet.userservice.entity.UserWatchlist;
import com.minet.userservice.exception.WatchlistException;
import com.minet.userservice.service.UserWatchlistService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@WebMvcTest(UserWatchlistService.class)
class UserWatchlistServiceTest {
    @MockBean
    UserWatchlistRepository userWatchlistRepository;

    @Autowired
    UserWatchlistService userWatchlistService;

    private UserWatchlist userWatchlist;
    private User user;

    @BeforeEach
    void setup() {
        userWatchlist =UserWatchlist.builder()
                .id(1)
                .user(user)
                .currencyId("bitcoin")
                .build();
    }

    @DisplayName("JUnit tests for UserWatchlistService saveWatchlist")
    @Test
    void testSaveWatchlist() {
        Mockito.when(userWatchlistRepository.save(Mockito.any())).thenReturn(userWatchlist);
        String string = userWatchlistService.saveWatchlist(user,"bitcoin");
        assertEquals("bitcoin",string);

        Mockito.when(userWatchlistRepository.save(Mockito.any())).thenThrow(new WatchlistException("unable to add"));
        Exception exception = assertThrows(WatchlistException.class, () -> {
            userWatchlistService.saveWatchlist(user,"bitcoin");
        });
        assertEquals("Cannot add to watchlist", exception.getMessage());
    }

    @DisplayName("JUnit tests for UserWatchlistService deleteWatchlist")
    @Test
    void testDeleteWatchlist() {
        Mockito.when(userWatchlistRepository.findByUserIdAndCurrencyId(1,"bitcoin")).thenReturn(userWatchlist);
        String string = userWatchlistService.deleteWatchlist(1,"bitcoin");
        assertEquals("Successfully removed from watchlist",string);

        Mockito.when(userWatchlistRepository.findByUserIdAndCurrencyId(1,"bitcoin")).thenReturn(null);

        Exception exception = assertThrows(WatchlistException.class, () -> {
            userWatchlistService.deleteWatchlist(1,"bitcoin");
        });
        assertEquals("Watchlist not found for given id", exception.getMessage());
    }

    @DisplayName("JUnit tests for UserWatchlistService getWatchlistForUser")
    @Test
    void testGetWatchlistForUser() {
        List<String> list = new ArrayList<>();
        list.add("bitcoin");
        Mockito.when(userWatchlistRepository.findByUserId(1)).thenReturn(Stream.of(userWatchlist).collect(Collectors.toList()));
        List<String> string = userWatchlistService.getWatchlistForUser(1);
        assertEquals(1,string.size());

        Mockito.when(userWatchlistRepository.findByUserId(1)).thenThrow(new WatchlistException("not found"));
        Exception exception = assertThrows(WatchlistException.class, () -> {
            userWatchlistService.getWatchlistForUser(1);
        });
        assertEquals("Cannot find watchlist", exception.getMessage());
    }
}
