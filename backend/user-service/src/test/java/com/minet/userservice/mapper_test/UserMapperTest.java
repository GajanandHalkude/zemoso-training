package com.minet.userservice.mapper_test;

import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.mapper.UserMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(UserMapper.class)
class UserMapperTest {

    @MockBean
    private ModelMapper modelMapper;
    @Autowired
    private UserMapper userMapper;


    private User firstUser;

    private UserDto firstUserDto;


    @BeforeEach
    void setup() {
        firstUser = User.builder()
                .id(1)
                .name("User 1")
                .password("Testing@123")
                .email("abc@gmail.com")
                .avatar("avatar")
                .build();

        firstUserDto = UserDto.builder()
                .id(1)
                .name("User 2")
                .password("Testing@123")
                .email("xyz@gmail.com")
                .avatar("avatar")
                .build();

    }

    @DisplayName("JUnit test for converting entity to dto")
    @Test
    void entityToDtoTest() {
        Mockito.when(userMapper.convertToUserDTO(firstUser)).thenReturn(firstUserDto);
        UserDto userDto = userMapper.convertToUserDTO(firstUser);
        assertNotNull(userDto);
        Mockito.when(modelMapper.map(firstUser,UserDto.class)).thenThrow(new NullPointerException("NullPointerException in converting to dto"));
        Exception exception = assertThrows(NullPointerException.class, () -> {
            userMapper.convertToUserDTO(firstUser);
        });
        assertEquals("NullPointerException in converting to dto", exception.getMessage());

    }

    @DisplayName("JUnit test for converting dto to entity")
    @Test
    void dtoToEntityTest() throws Exception {
        Mockito.when(userMapper.convertToUser(firstUserDto)).thenReturn(firstUser);
        User user = userMapper.convertToUser(firstUserDto);
        assertNotNull(user);
        Mockito.when(userMapper.convertToUser(firstUserDto)).thenThrow(new NullPointerException("NullPointerException in converting to entity"));
        Exception exception = assertThrows(NullPointerException.class, () -> {
            userMapper.convertToUser(firstUserDto);
        });
        assertEquals("NullPointerException in converting to entity", exception.getMessage());

    }
}
