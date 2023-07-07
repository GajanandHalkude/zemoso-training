package com.minet.userservice.service;


import com.minet.userservice.entity.User;

import java.util.List;

public interface UserService {
    public User getUserById(int userId);
    public List<User> getAllUsers();
    public User saveUser(User user);

    public User getUserByEmail(String email);

    void resetUserPassword(int userId, String newPassword);
}
