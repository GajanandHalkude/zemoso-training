package com.minet.userservice.vo_test;

import com.minet.userservice.vo.Wallet;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class WalletTest {
    @DisplayName("JUnit tests for wallet vo")
    @Test
    void testWallet() {
        Wallet wallet=new Wallet();
        wallet.setId(1);
        wallet.setName("Wallet1");
        wallet.setCurrency_Id("wallet");
        wallet.setBalance(1);
        wallet.setAvg_value(5000);
        wallet.setInvested_amount(5000);

        assertThat(wallet).isNotNull();
        assertThat(wallet.getId()).isEqualTo(1);
        assertThat(wallet.getName()).isEqualTo("Wallet1");
        assertThat(wallet.getCurrency_Id()).isEqualTo("wallet");
        assertThat(wallet.getBalance()).isEqualTo(1);
        assertThat(wallet.getAvg_value()).isEqualTo(5000);
        assertThat(wallet.getInvested_amount()).isEqualTo(5000);

        Wallet wallet1 =new Wallet(1, "Wallet1", 1, 5000, 5000,"bitcoin");

        assertThat(wallet1).isNotNull();
        assertThat(wallet1.getId()).isEqualTo(1);
        assertThat(wallet1.getName()).isEqualTo("Wallet1");
        assertThat(wallet1.getCurrency_Id()).isEqualTo("bitcoin");
        assertThat(wallet1.getBalance()).isEqualTo(1);
        assertThat(wallet1.getInvested_amount()).isEqualTo(5000);
        assertThat(wallet1.getAvg_value()).isEqualTo(5000);

        Wallet.builder().build();
    }
}
