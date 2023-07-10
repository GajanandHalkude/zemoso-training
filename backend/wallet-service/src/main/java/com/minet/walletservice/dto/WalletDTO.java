package com.minet.walletservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WalletDTO {

   private int id;

    @NotEmpty
    private String name;

    @NotNull
    private double balance;

    @NotNull
    private double avgValue;

    @NotNull
    private double investedAmount;

    @NotEmpty
   private String currencyId;

}
