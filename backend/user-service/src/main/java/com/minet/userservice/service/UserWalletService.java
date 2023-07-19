package com.minet.userservice.service;

import com.minet.userservice.dto.WalletDto;
import com.minet.userservice.vo.Wallet;
import com.minet.userservice.entity.User;

import java.util.List;

public interface UserWalletService {
    public List<WalletDto> getAllWalletForUser(int userId);
    public Wallet getWalletForUserByWalletId(int userId,int walletid);
    public Wallet saveWallet(User user, Wallet wallet);
    public Wallet updateWallet(Wallet wallet, int walletId);
}
