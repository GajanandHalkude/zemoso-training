package com.minet.userservice.service;

import com.minet.userservice.entity.User;

import java.util.List;

public interface UserWatchlistService {
    public String saveWatchlist(User user, String currencyId);

    public String deleteWatchlist(int userId, String currencyId);

    public List<String> getWatchlistForUser(int userId);
}
