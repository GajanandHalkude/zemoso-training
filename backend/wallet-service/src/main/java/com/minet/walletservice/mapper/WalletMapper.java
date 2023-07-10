package com.minet.walletservice.mapper;
import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.Wallet;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

@AllArgsConstructor
public class WalletMapper {
    @Autowired
    private final  ModelMapper modelMapper;


    public WalletDTO convertToWalletDTO(Wallet wallet){
        return modelMapper.map(wallet, WalletDTO.class);
    }

    public Wallet convertToWallet(WalletDTO walletDto){
        return modelMapper.map(walletDto, Wallet.class);
    }


}