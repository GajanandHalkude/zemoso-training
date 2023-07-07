package com.minet.userservice.dto;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WalletDto {

    int id;
    String name;
    double balance;
    double avgValue;
    double investedAmount;
    String currencyId;

}

