package com.minet.userservice.entity_test;

import com.minet.userservice.entity.User;
import com.minet.userservice.entity.UserTransaction;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.junit.Assert.assertEquals;

class UserTransactionTest {

    @Mock
    UserTransaction userTransaction;

    @Mock
    User user;

    @DisplayName("JUnit tests for user_transaction entity")
    @Test
    void testUserTransaction() {
        userTransaction = new UserTransaction();
        userTransaction = new UserTransaction(user, 3);
        userTransaction = new UserTransaction(1, user, 1);
        assertEquals(1, userTransaction.getId());
        userTransaction.setId(2);
        assertEquals(2, userTransaction.getId());
        assertEquals(user, userTransaction.getUser());
        user = new User(4, "User","test@gmail.com", "Testing@123", "Avatar");
        userTransaction.setUser(user);
        assertEquals(user, userTransaction.getUser());
        assertEquals(1, userTransaction.getTransactionId());
        userTransaction.setTransactionId(2);
        assertEquals(2, userTransaction.getTransactionId());
        assertEquals("UserTransaction{id=2, user=User{id=4, name='User', email='test@gmail.com', password='Testing@123', avatar='Avatar'}, transactionId=2}", userTransaction.toString());

        UserTransaction.builder().id(1).user(user).transactionId(1).build();
    }
}
