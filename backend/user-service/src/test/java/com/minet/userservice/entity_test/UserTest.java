package com.minet.userservice.entity_test;

import com.minet.userservice.entity.User;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;

class UserTest {

    @DisplayName("JUnit tests for user entity")
    @Test
    void userTest() {
        User user = new User();
        user = new User(1, "User", "abc@gmail.com", "Testing@123", "avatar");
        assertEquals(1, user.getId());
        user.setId(2);
        assertEquals(2, user.getId());
        assertEquals("User", user.getName());
        user.setName("Shubham");
        assertEquals("Shubham", user.getName());
        assertEquals("Testing@123", user.getPassword());
        user.setPassword("Testing@123");
        assertEquals("Testing@123", user.getPassword());
        assertEquals("abc@gmail.com", user.getEmail());
        user.setEmail("test@yahoo.com");
        assertEquals("test@yahoo.com", user.getEmail());
        assertEquals("avatar", user.getAvatar());
        user.setAvatar("avata");
        assertEquals("avata", user.getAvatar());
        assertEquals("User{id=2, name='Shubham', email='test@yahoo.com', password='Testing@123', avatar='avata'}", user.toString());

        User user1 = User.builder()
                        .id(1).name("User1").password("Testing@123").email("demo@gmail.com").avatar("avatar").build();
        assertEquals(1, user1.getId());
        assertEquals("User1", user1.getName());
        assertEquals("Testing@123", user1.getPassword());
        assertEquals("demo@gmail.com", user1.getEmail());
        assertEquals("avatar", user1.getAvatar());
    }
}
