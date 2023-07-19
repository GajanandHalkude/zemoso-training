package com.minet.userservice.service.impl;

import com.minet.userservice.dao.UserRepository;
import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserException;
import com.minet.userservice.mapper.UserMapper;
import com.minet.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Override
    public User getUserById(int userId) {
        Optional<User> result = userRepository.findById(userId);
        if (result.isEmpty()) {
            throw new UserException("User not found with id: " + userId);
        }
        return result.get();
    }

    @Override
    public UserDto getUserByEmail(String email) {
        Optional<User> result = Optional.ofNullable(userRepository.findByEmail(email));
        if (!result.isPresent()) {
            throw new UserException("User not found with email: " + email);
        }
        return userMapper.convertToUserDTO(result.get());
    }


    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            throw new UserException("users not found");
        } else return users.stream()
                .map(userMapper::convertToUserDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto saveUser(User user) {
        try {
            return userMapper.convertToUserDTO(userRepository.save(user));
        } catch (UserException e) {
            log.error(" >>> CATCH BLOCK IN ADD User");
            throw new UserException("Unable to add an user");
        }
    }

    @Override
    public void resetUserPassword(int userId, String newPassword) {
        User user = getUserById(userId);
        user.setPassword(newPassword.replace("\"", ""));
        userRepository.save(user);
    }


}
