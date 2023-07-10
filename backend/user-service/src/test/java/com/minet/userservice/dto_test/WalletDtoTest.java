package com.minet.userservice.dto_test;

import com.minet.userservice.dto.WalletDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class WalletDtoTest {

    @DisplayName("JUnit tests for transaction dto")
    @Test
    void testTransactionDto() {
        WalletDto walletDto1=new WalletDto();
        walletDto1.setId(1);
        walletDto1.setName("Wallet1");
        walletDto1.setCurrencyId("wallet");
        walletDto1.setBalance(1);
        walletDto1.setAvgValue(5000);
        walletDto1.setInvestedAmount(5000);

        assertThat(walletDto1).isNotNull();
        assertThat(walletDto1.getId()).isEqualTo(1);
        assertThat(walletDto1.getName()).isEqualTo("Wallet1");
        assertThat(walletDto1.getCurrencyId()).isEqualTo("wallet");
        assertThat(walletDto1.getBalance()).isEqualTo(1);
        assertThat(walletDto1.getAvgValue()).isEqualTo(5000);
        assertThat(walletDto1.getInvestedAmount()).isEqualTo(5000);

        WalletDto walletDto =new WalletDto(1, "Wallet1", 1, 5000, 5000,"bitcoin");

        assertThat(walletDto).isNotNull();
        assertThat(walletDto.getId()).isEqualTo(1);
        assertThat(walletDto.getName()).isEqualTo("Wallet1");
        assertThat(walletDto.getCurrencyId()).isEqualTo("bitcoin");
        assertThat(walletDto.getBalance()).isEqualTo(1);
        assertThat(walletDto.getInvestedAmount()).isEqualTo(5000);
        assertThat(walletDto.getAvgValue()).isEqualTo(5000);
    }
}
