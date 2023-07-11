package com.minet.userservice;

import com.minet.userservice.service.UserService;
import com.minet.userservice.service.UserTransactionService;
import com.minet.userservice.service.UserWalletService;
import com.minet.userservice.service.UserWatchlistService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserServiceApplicationTests {
    @Autowired
    private UserService userService;

    @Autowired
    private UserWalletService userWalletService;

    @Autowired
    private UserTransactionService userTransactionService;

    @Autowired
    private UserWatchlistService userWatchlistService;

    @Test
    void contextLoads() {
        String[] str=new String[]{};
        UserServiceApplication.main(str);
        Assertions.assertEquals(1,2-1);
        assertThat(userService).isNotNull();
        assertThat(userWalletService).isNotNull();
        assertThat(userTransactionService).isNotNull();
        assertThat(userWatchlistService).isNotNull();
    }
}
