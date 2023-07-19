package com.minet.userservice.service_test;

import com.minet.userservice.dao.UserRepository;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserException;
import com.minet.userservice.mapper.UserMapper;
import com.minet.userservice.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@WebMvcTest(UserService.class)
class UserServiceTest {
    @Autowired
    UserService userService;

    @MockBean
    UserMapper userMapper;

    @MockBean
    UserRepository userRepository;

    private User firstUser;

    @BeforeEach
    void setup() {
        firstUser = User.builder()
                .id(1)
                .name("user name 1")
                .password("Testing@123")
                .email("abc@gmail.com")
                .avatar("avatar")
                .build();
    }

    @DisplayName("JUnit tests for user service getUserById")
    @Test
    void testGetUserById(){
        when(userRepository.findById(2)).thenReturn(Optional.of(firstUser));
        userService.getUserById(2);
        when(userRepository.findById(2)).thenReturn(Optional.empty());
        assertThrows(UserException.class, () -> {
            userService.getUserById(2);
        });
    }

    @DisplayName("JUnit tests for user service getAllUsers")
    @Test
    void testGetAllUSer(){
        List<User> users = new ArrayList<>();
        when(userRepository.findAll()).thenReturn(Stream.of(firstUser).collect(Collectors.toList()));
        int length = userService.getAllUsers().size();
        assertEquals(1,length);
        when(userRepository.findAll()).thenReturn(users);
        assertThrows(UserException.class, () -> {
            userService.getAllUsers();
        });
    }

    @DisplayName("JUnit tests for user service saveUser")
    @Test
    void testsaveUSer(){
        when(userRepository.save(firstUser)).thenReturn(firstUser);
        userService.saveUser(firstUser);
        when(userRepository.save(firstUser)).thenThrow(new UserException("Unable to add"));
        assertThrows(UserException.class, () -> {
            userService.saveUser(firstUser);
        });
    }

    @DisplayName("JUnit tests for user service getUserByEmail")
    @Test
    void getUserByEmail(){
        when(userRepository.findByEmail("abc@gmail.com")).thenReturn((firstUser));
        userService.getUserByEmail("abc@gmail.com");
        when(userRepository.findByEmail("abc@gmail.com")).thenReturn(null);
        assertThrows(UserException.class, () -> {
            userService.getUserByEmail("abc@gmail.com");
        });
    }

    @DisplayName("JUnit tests for user service resetUserPassword")
    @Test
     void resetUserPassword() {
        int userId = 1;
        String newPassword = "newPassword";
        User user = new User();
        user.setId(userId);
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        userService.resetUserPassword(userId, newPassword);
        assertEquals(newPassword, user.getPassword());
        verify(userRepository, times(1)).findById(userId);
        verify(userRepository, times(1)).save(user);
    }

}
