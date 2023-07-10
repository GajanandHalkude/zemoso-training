package com.minet.walletservice.service;

import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.WalletNotFoundException;
import com.minet.walletservice.repository.WalletRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class WalletService implements IWalletService {

    @Autowired
    private final WalletRepository walletRepository;

    public Wallet findWalletById(int walletId){
        Optional<Wallet> result=walletRepository.findById(walletId);
        if(result.isEmpty()){

            throw new WalletNotFoundException("Wallet not found with id: "+walletId);
        }
        return result.get();
    }

    public Wallet saveWallet(Wallet wallet){
        return walletRepository.save(wallet);
    }

    public List<Wallet> findAllWallets(){
        return walletRepository.findAll();
    }

}