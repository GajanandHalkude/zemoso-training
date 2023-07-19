package com.minet.userservice.controller_test;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.userservice.config.JwtGeneratorInterface;
import com.minet.userservice.controller.UserController;
import com.minet.userservice.dao.UserRepository;
import com.minet.userservice.dto.LoginUserDTO;
import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserException;
import com.minet.userservice.mapper.UserMapper;
import com.minet.userservice.service.UserService;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.server.ResponseStatusException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    @MockBean
    private UserMapper userMapper;

    @MockBean
    private ModelMapper modelMapper;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private UserService userService;

    @MockBean
    private JwtGeneratorInterface jwtGenerator;
    @Autowired
    private UserController userController;
    private User firstUser;
    private User secondUser;

    @BeforeEach
    void setup() {
        firstUser = User.builder()
                .id(1)
                .name("User1")
                .email("test@gmail.com")
                .password("Testing@123")
                .avatar("Avatar")
                .build();

        secondUser = User.builder()
                .id(2)
                .name("User2")
                .email("test2@gmail.com")
                .password("Testing@123")
                .avatar("Avatar1")
                .build();
    }

    @DisplayName("JUnit test for fetching all users")
    @Test
    void getAllUsers() throws Exception {
        List<User> records = new ArrayList<>(Arrays.asList(firstUser, secondUser));

        List<UserDto> dtoRecords = records.stream()
                .map(userMapper::convertToUserDTO)
                .collect(Collectors.toList());

        Mockito.when(userController.getAllUsers()).thenReturn(dtoRecords);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));

        Mockito.when(userController.getAllUsers()).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No users found"));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @DisplayName("JUnit test to add a user")
    @Test
    void addUser() throws Exception {
        UserDto newUserDto = UserDto.builder()
                .id(3)
                .name("Jon Snow")
                .email("jon@gmail.com")
                .password("Testing@123")
                .avatar("Avatar")
                .build();

        Mockito.when(userController.saveUser(newUserDto)).thenReturn(newUserDto);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/v1/users/register/")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(newUserDto));

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",  Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.email", Matchers.is("jon@gmail.com")));

        Mockito.when(userController.saveUser(newUserDto)).thenThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add user"));

        MockMvcRequestBuilders.post("/api/v1/users/register/")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(newUserDto));

        mockMvc.perform(mockRequest)
                .andExpect(status().isBadRequest());
    }

    @DisplayName("JUnit test for getting a user by id")
    @Test
    void getUserById() throws Exception {
        UserDto secondUserDto = userMapper.convertToUserDTO(secondUser);

        Mockito.when(userController.getUserById(2)).thenReturn(secondUserDto);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/6")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        Mockito.when(userController.getUserById(6)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found for given id: 6"));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/6")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }


    @DisplayName("JUnit test for getting a user by Email")
    @Test
    void getUserByEmail() throws Exception {
        UserDto secondUserDto = userMapper.convertToUserDTO(secondUser);

        Mockito.when(userController.getUserByEmail("test2@gmail.com")).thenReturn(secondUserDto);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/email/test2@gmail.com")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        Mockito.when(userController.getUserByEmail("test6@gmail.com")).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found for given email: test6@gmail.com"));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/users/email/test6@gmail.com")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }


    @DisplayName("JUnit test to reset password of user")
    @Test
    void resetPassword() throws Exception {
        UserDto newUserDto = UserDto.builder()
                .id(3)
                .name("Jon Snow")
                .email("jon@gmail.com")
                .password("Testing@123")
                .avatar("Avatar")
                .build();

        UserDto userDto2 = UserDto.builder().password("newPassword").build();
        Mockito.doNothing().when(userService).resetUserPassword(newUserDto.getId(),"newPassword");
        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.patch("/api/v1/users/3/reset-password")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(userDto2));
        mockMvc.perform(mockRequest)
                .andExpect(status().isOk());
    }

    @Test
    void testLoginUser_NullEmailOrPassword() {
        LoginUserDTO loginUserDTO = new LoginUserDTO();
        loginUserDTO.setEmail(null);
        loginUserDTO.setPassword(null);
        ResponseEntity<?> response = userController.loginUser(loginUserDTO);
        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals("UserName or Password is Empty", response.getBody());
        verify(userService, never()).getUserByEmail(anyString());
        verify(jwtGenerator, never()).generateToken(any());
    }

    @Test
    void testLoginUser_InvalidCredentials() throws UserException {
        LoginUserDTO loginUserDTO = new LoginUserDTO();
        loginUserDTO.setEmail("test@example.com");
        loginUserDTO.setPassword("password");
        when(userService.getUserByEmail(loginUserDTO.getEmail())).thenReturn(null);
        ResponseEntity<?> response = userController.loginUser(loginUserDTO);
        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals("UserName or Password is Invalid", response.getBody());
        verify(userService, times(1)).getUserByEmail(loginUserDTO.getEmail());
        verify(jwtGenerator, never()).generateToken(any());
    }


}
