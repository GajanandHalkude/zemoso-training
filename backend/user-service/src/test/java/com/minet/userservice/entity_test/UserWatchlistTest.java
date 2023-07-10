package com.minet.userservice.entity_test;

import com.minet.userservice.entity.User;
import com.minet.userservice.entity.UserWatchlist;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.junit.Assert.assertEquals;

class UserWatchlistTest {
    @Mock
    UserWatchlist userWatchlist;

    @Mock
    User user;

    @DisplayName("JUnit tests for user_watchlist entity")
    @Test
    void watchlistTest() {
        userWatchlist = new UserWatchlist();
        userWatchlist = new UserWatchlist(user, "bitcoin");
        userWatchlist = new UserWatchlist(1, user, "bitcoin");
        assertEquals(1, userWatchlist.getId());
        assertEquals(user, userWatchlist.getUser());
        assertEquals("bitcoin", userWatchlist.getCurrencyId());
        user = new User(4, "User","test@gmail.com", "Testing@123", "Avatar");
        userWatchlist.setId(2);
        userWatchlist.setUser(user);
        userWatchlist.setCurrencyId("xrp");
        assertEquals(2, userWatchlist.getId());
        assertEquals(user, userWatchlist.getUser());
        assertEquals("xrp", userWatchlist.getCurrencyId());
        UserWatchlist.builder().id(1).user(user).currencyId("bitcoin").build();
    }
}
