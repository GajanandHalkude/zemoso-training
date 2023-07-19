package com.minet.userservice.controller;

import com.minet.userservice.vo.Wallet;
import com.minet.userservice.dto.WalletDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.mapper.WalletMapper;
import com.minet.userservice.service.UserService;
import com.minet.userservice.service.UserWalletService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Slf4j
@RequestMapping("/api/v1/users")
public class UserWalletController {

    @Autowired
    UserWalletService userWalletService;

    @Autowired
    UserService userService;

    @Autowired
    private WalletMapper walletMapper;

    @Autowired
    ModelMapper modelMapper;

    @GetMapping("/{userId}/wallets")
    public List<WalletDto> getAllUserWallets(@PathVariable int userId) {
        try {
            log.info(" >>> INSIDE UserWalletController: getAllUserWallets");
            List<WalletDto> userWallets = userWalletService.getAllWalletForUser(userId);
            return userWallets;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No wallets found");
        }
    }

    @PostMapping("/{userId}/wallets")
    @Transactional(rollbackFor = Exception.class)
    public WalletDto saveUserWallet(@PathVariable int userId, @RequestBody WalletDto walletDto) {
        try {
            log.info(" >>> INSIDE UserWalletController: saveUserWallet");
            User user = userService.getUserById(userId);
            return walletMapper.convertToWalletDTO(userWalletService.saveWallet(user,walletMapper.convertToWallet(walletDto)));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add wallet");
        }
    }

    @PatchMapping("/{userId}/wallets/{walletId}")
    @Transactional(rollbackFor = Exception.class)
    public WalletDto updateUserWallet(@PathVariable int userId,@PathVariable int walletId, @RequestBody WalletDto walletDto) {
        try {
            log.info(" >>> INSIDE UserWalletController: updateUserWallet");
            Wallet wallet1 = walletMapper.convertToWallet(walletDto);
            wallet1.setId(walletId);
            return walletMapper.convertToWalletDTO(userWalletService.updateWallet(wallet1,walletId));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to update wallet");
        }
    }

    @GetMapping("/{userId}/wallets/{walletId}")
    public WalletDto getUserWalletByWalletId(@PathVariable int userId, @PathVariable int walletId) {
        try {
            log.info(" >>> INSIDE UserWalletController: getUserWalletByWalletId");
            Wallet wallet = userWalletService.getWalletForUserByWalletId(userId, walletId);
            return walletMapper.convertToWalletDTO(wallet);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user wallet found for given id" + userId);
        }
    }
}
