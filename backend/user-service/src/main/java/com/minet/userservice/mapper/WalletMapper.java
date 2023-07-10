package com.minet.userservice.mapper;

import com.minet.userservice.vo.Wallet;
import com.minet.userservice.dto.WalletDto;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class WalletMapper {

    @Autowired
    ModelMapper modelMapper;

    public WalletDto convertToWalletDTO(Wallet wallet) {
        try {
            log.info(" >>> INSIDE WalletMapper: convertToDto() Converting dto to entity");
            return modelMapper.map(wallet, WalletDto.class);
        } catch (NullPointerException exception) {
            log.error(" >>> INSIDE WalletMapper: convertToDto() Converting dto to entity");
            throw new NullPointerException("NullPointerException in converting to dto");
        }
    }
    public Wallet convertToWallet(WalletDto walletDto) {
        try {
            log.info(" >>> INSIDE WalletMapper: convertToEntity() Converting dto to entity");
            return modelMapper.map(walletDto, Wallet.class);
        }
        catch(NullPointerException exception) {
            log.error(" >>> INSIDE WalletMapper: convertToEntity() Converting dto to entity");
            throw new NullPointerException("NullPointerException in converting to entity");
        }

    }


}
