package com.minet.userservice.service.impl;

import com.minet.userservice.dto.WalletDto;
import com.minet.userservice.mapper.WalletMapper;
import com.minet.userservice.vo.Wallet;
import com.minet.userservice.dao.UserWalletRepository;
import com.minet.userservice.entity.User;
import com.minet.userservice.entity.UserWallet;
import com.minet.userservice.exception.WalletException;
import com.minet.userservice.service.UserWalletService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class UserWalletServiceImpl implements UserWalletService {

    @Value("${wallet.url}")
    private String walletUrl;
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private WalletMapper walletMapper;

    @Autowired
    private UserWalletRepository userWalletRepository;

    @Override
    public List<WalletDto> getAllWalletForUser(int userId) {
        try {
            List<UserWallet> userWalletList = userWalletRepository.findByUserId(userId);
            List<Wallet> wallets = new ArrayList<>();
            for (UserWallet userwallet : userWalletList) {
                Wallet wallet = restTemplate.getForObject(walletUrl + userwallet.getWalletId(), Wallet.class);
                if (wallet == null) {
                    throw new WalletException("wallet not found");
                } else {
                    wallets.add(wallet);
                }
            }
            return wallets.stream()
                    .map(walletMapper::convertToWalletDTO)
                    .collect(Collectors.toList());
        } catch (WalletException e) {
            log.error("Cannot find wallets");
            throw new WalletException("wallets not found");
        }
    }

    @Override
    public Wallet getWalletForUserByWalletId(int userId, int walletId) {
        UserWallet userWallet = userWalletRepository.findByUserIdAndWalletId(userId, walletId);
        Wallet wallet = restTemplate.getForObject(walletUrl + userWallet.getWalletId(), Wallet.class);
        if (wallet == null) {
            throw new WalletException("wallet not found");
        } else {
            return wallet;
        }

    }

    @Override
    public Wallet saveWallet(User user, Wallet wallet) {
        wallet = restTemplate.postForObject(walletUrl, wallet, Wallet.class);
        if (wallet == null) {
            throw new WalletException("Wallet not found");
        }
        UserWallet userWallet = new UserWallet(user, wallet.getId());
        userWalletRepository.save(userWallet);
        return wallet;
    }


    @Override
    public Wallet updateWallet(Wallet wallet, int walletId) {
        restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory());
        Wallet wallet1 = restTemplate.patchForObject(walletUrl + walletId, wallet, Wallet.class);
        if (wallet1 == null) {
            throw new WalletException("updating wallet failed");
        }
        log.info(wallet1.toString());
        return wallet;
    }

}
