package com.minet.userservice.entity_test;

import com.minet.userservice.entity.User;
import com.minet.userservice.entity.UserWallet;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.junit.Assert.assertEquals;

class UserWalletTest {

    @Mock
    UserWallet userWallet;

    @Mock
    User user;

    @DisplayName("JUnit tests for user_wallet entity")
    @Test
    void userWalletTest(){
        userWallet = new UserWallet();
        userWallet = new UserWallet(user, 3);
        userWallet = new UserWallet(1, user, 1);
        assertEquals(1, userWallet.getId());
        assertEquals(user, userWallet.getUser());
        assertEquals(1, userWallet.getWalletId());
        user = new User(4, "User","test@gmail.com", "Testing@123", "Avatar");
        userWallet.setId(2);
        userWallet.setUser(user);
        userWallet.setWalletId(2);
        assertEquals(2, userWallet.getId());
        assertEquals(user, userWallet.getUser());
        assertEquals(2, userWallet.getWalletId());
        UserWallet.builder().id(1).user(user).walletId(1).build();
    }
}
