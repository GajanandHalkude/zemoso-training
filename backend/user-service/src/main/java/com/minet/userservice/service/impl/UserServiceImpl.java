package com.minet.userservice.service.impl;

import com.minet.userservice.dao.UserRepository;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUserById(int userId) {
        Optional<User> result = userRepository.findById(userId);
        if (result.isEmpty()) {
            throw new UserNotFoundException("User not found with id: " + userId);
        }
        return result.get();
    }

    @Override
    public User getUserByEmail(String email) {
        Optional<User> result = Optional.ofNullable(userRepository.findByEmail(email));
        if (!result.isPresent()) {
            throw new UserNotFoundException("User not found with email: " + email);
        }
        return result.get();
    }


    @Override
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            throw new UserNotFoundException("users not found");
        } else return users;
    }

    @Override
    public User saveUser(User user) {
        try {
            return userRepository.save(user);
        } catch (UserNotFoundException e) {
            log.error(" >>> CATCH BLOCK IN ADD User");
            throw new UserNotFoundException("Unable to add an user");
        }
    }

    @Override
    public void resetUserPassword(int userId, String newPassword) {
        User user = getUserById(userId);
        user.setPassword(newPassword.replace("\"", ""));
        userRepository.save(user);
    }


}
