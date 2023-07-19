package com.minet.userservice.service;


import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;

import java.util.List;

public interface UserService {
    public User getUserById(int userId);
    public List<UserDto> getAllUsers();
    public UserDto saveUser(User user);
    public UserDto getUserByEmail(String email);
    void resetUserPassword(int userId, String newPassword);
}
