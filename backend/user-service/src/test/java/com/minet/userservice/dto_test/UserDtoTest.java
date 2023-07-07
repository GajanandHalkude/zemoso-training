package com.minet.userservice.dto_test;

import com.minet.userservice.dto.UserDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


class UserDtoTest {
    @DisplayName("JUnit tests for transaction dto")
    @Test
    void testTransactionDto() {
        UserDto userDto = new UserDto(1, "User", "Testing@123", "abc@gmail.com", "avatar");
        assertThat(userDto.getId()).isEqualTo(1);
        assertThat(userDto.getName()).isEqualTo("User");
        assertThat(userDto.getPassword()).isEqualTo("Testing@123");
        assertThat(userDto.getEmail()).isEqualTo("abc@gmail.com");
        assertThat(userDto.getAvatar()).isEqualTo("avatar");

        userDto.setId(2);
        userDto.setName("User2");
        userDto.setPassword("Testing@123");
        userDto.setEmail("abcd@gmail.com");
        userDto.setAvatar("avata");
        assertThat(userDto.getId()).isEqualTo(2);
        assertThat(userDto.getName()).isEqualTo("User2");
        assertThat(userDto.getPassword()).isEqualTo("Testing@123");
        assertThat(userDto.getEmail()).isEqualTo("abcd@gmail.com");
        assertThat(userDto.getAvatar()).isEqualTo("avata");
    }
}
