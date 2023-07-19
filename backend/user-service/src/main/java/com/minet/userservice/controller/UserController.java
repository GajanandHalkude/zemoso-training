package com.minet.userservice.controller;

import com.minet.userservice.config.JwtGeneratorInterface;
import com.minet.userservice.dto.LoginUserDTO;
import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserException;
import com.minet.userservice.mapper.UserMapper;
import com.minet.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;


@RestController
@Slf4j
@RequestMapping("/api/v1/users")
public class UserController {


    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private JwtGeneratorInterface jwtGenerator;


    @GetMapping("/")
    public List<UserDto> getAllUsers() {
        try {
            log.info(" >>> INSIDE UserController: get all users");
            return userService.getAllUsers();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No users found");
        }
    }

    @PostMapping("/register/")
    public UserDto saveUser(@RequestBody UserDto userDto) {
        try {
            log.info(" >>> INSIDE UserController: adding user");
            User user = userMapper.convertToUser(userDto);
            return userService.saveUser(user);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add user");
        }
    }

    @GetMapping("/{userId}")
    public UserDto getUserById(@PathVariable int userId) {
        try {
            log.info(" >>> INSIDE UserController: getting user by user_id");
            User user = userService.getUserById(userId);
            return userMapper.convertToUserDTO(user);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found for given id" + userId);
        }
    }

    @GetMapping("/email/{email}")
    public UserDto getUserByEmail(@PathVariable String email) {
        try {
            log.info(" >>> INSIDE UserController: getting user by email");
            return userService.getUserByEmail(email);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found for given email: " + email);
        }
    }

    @PatchMapping("/{userId}/reset-password")
    public void resetUserPassword(@PathVariable int userId, @RequestBody String newPassword) {
        try {
            log.info(" >>> INSIDE UserController: resetting user password"+ newPassword);
            userService.resetUserPassword(userId, newPassword);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found for given id: " + userId);
        }
    }

    @PostMapping("/login/")
    public ResponseEntity<?> loginUser(@RequestBody LoginUserDTO loginUserDTO) {
        try {
            log.info(">>>>>>>inside login User");
            if(loginUserDTO.getEmail() == null || loginUserDTO.getPassword() == null) {

                throw new UserException("UserName or Password is Empty");
            }
            UserDto userData = userService.getUserByEmail(loginUserDTO.getEmail());
            if(userData == null){
                throw new UserException("UserName or Password is Invalid");
            }
            return new ResponseEntity<>(jwtGenerator.generateToken(loginUserDTO), HttpStatus.OK);
        } catch (UserException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }
}
