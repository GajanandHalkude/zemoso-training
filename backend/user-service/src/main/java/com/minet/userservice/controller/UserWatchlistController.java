package com.minet.userservice.controller;

import com.minet.userservice.entity.User;
import com.minet.userservice.service.UserService;
import com.minet.userservice.service.UserWatchlistService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/users")
public class UserWatchlistController {
    @Autowired
    UserWatchlistService userWatchlistService;

    @Autowired
    UserService userService;

    @GetMapping("/{userId}/watchlist")
    public List<String> getUserWatchlist(@PathVariable int userId) {
        try {
            log.info(" >>> INSIDE UserWatchlistController: getUserWatchlist");
            return userWatchlistService.getWatchlistForUser(userId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No watchlist found");
        }
    }

    @PostMapping("/{userId}/watchlist")
    public String addCryptoIdForUserWatchlist(@PathVariable int userId, @RequestBody String cryptoId) {
        try {
            log.info(" >>> INSIDE UserWatchlistController: addCryptoIdForUserWatchlist");
            User user = userService.getUserById(userId);
            return userWatchlistService.saveWatchlist(user,cryptoId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add crypto to watchlist");
        }
    }

    @DeleteMapping("/{userId}/watchlist/{cryptoId}")
    public String deleteCryptoIdForUserWatchlist(@PathVariable int userId, @PathVariable String cryptoId) {
        try {
            log.info(" >>> INSIDE UserWatchlistController: deleteCryptoIdForUserWatchlist");
            return userWatchlistService.deleteWatchlist(userId,cryptoId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to delete coin from watchlist");
        }
    }
}
