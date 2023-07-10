package com.minet.walletservice.service;
import com.minet.walletservice.entity.Wallet;
import java.util.List;
public interface IWalletService {
    Wallet findWalletById(int walletId);
    Wallet saveWallet(Wallet wallet);
    List<Wallet> findAllWallets();

}
