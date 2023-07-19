package com.minet.userservice.service.impl;

import com.minet.userservice.dao.UserWatchlistRepository;
import com.minet.userservice.entity.User;
import com.minet.userservice.entity.UserWatchlist;
import com.minet.userservice.exception.WatchlistException;
import com.minet.userservice.service.UserWatchlistService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class UserWatchlistServiceImpl implements UserWatchlistService {

    @Autowired
    UserWatchlistRepository userWatchlistRepository;

    @Override
    public String saveWatchlist(User user, String cryptoId) {
        try {
            UserWatchlist userWatchlist = new UserWatchlist();
            userWatchlist.setUser(user);
            userWatchlist.setCurrencyId(cryptoId);
            UserWatchlist userWatchlist1 = userWatchlistRepository.save(userWatchlist);
            return userWatchlist1.getCurrencyId();
        } catch (WatchlistException e) {
            log.error("Cannot add to watchlist");
            throw new WatchlistException("Cannot add to watchlist");
        }
    }

    @Override
    public String deleteWatchlist(int userId, String cryptoId) {
        UserWatchlist userWatchlist = userWatchlistRepository.findByUserIdAndCurrencyId(userId, cryptoId);
        if (userWatchlist == null) {
            throw new WatchlistException("Watchlist not found for given id");
        } else {
            userWatchlistRepository.delete(userWatchlist);
            return "Successfully removed from watchlist";
        }
    }


    @Override
    public List<String> getWatchlistForUser(int userId) {
        try {
            List<UserWatchlist> userWatchlist = userWatchlistRepository.findByUserId(userId);
            return userWatchlist.stream().map(watchlist -> watchlist.getCurrencyId().replaceAll("\"", "")).collect(Collectors.toList());
        } catch (WatchlistException e) {
            log.error("Cannot find watchlist");
            throw new WatchlistException("Cannot find watchlist");
        }
    }
}
