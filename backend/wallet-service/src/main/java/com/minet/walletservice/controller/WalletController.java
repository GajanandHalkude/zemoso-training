package com.minet.walletservice.controller;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.WalletNotFoundException;
import com.minet.walletservice.mapper.WalletMapper;
import com.minet.walletservice.service.WalletService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/v1/wallet")
@AllArgsConstructor
public class WalletController {

    @Autowired
    private final WalletService walletService;

    @Autowired
    private final WalletMapper walletMapper;

    @GetMapping("/{walletId}")
    public WalletDTO findWalletById(@PathVariable int walletId){
        Wallet wallet=walletService.findWalletById(walletId);
        return walletMapper.convertToWalletDTO(wallet);
    }

    @PatchMapping("/{walletId}")
    public WalletDTO updateWallet(@PathVariable int walletId, @Valid @RequestBody WalletDTO walletDTO){
        Wallet wallet=walletService.findWalletById(walletId);
        if(wallet==null){
            throw new WalletNotFoundException("Wallet not fount with id: "+walletId);
        }
        WalletDTO walletDetails=new WalletDTO(walletId, walletDTO.getName(),
                walletDTO.getBalance(), walletDTO.getAvgValue(), walletDTO.getInvestedAmount(), walletDTO.getCurrencyId());
        Wallet wallet1=walletMapper.convertToWallet(walletDetails);
        return walletMapper.convertToWalletDTO(walletService.saveWallet(wallet1));
    }

    @GetMapping("/")
    public List<WalletDTO> findAllWallets(){
        return walletService.findAllWallets()
                .stream()
                .map(walletMapper::convertToWalletDTO)
                .collect(Collectors.toList());
    }

}
