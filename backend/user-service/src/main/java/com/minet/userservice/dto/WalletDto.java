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
    double avg_value;
    double invested_amount;
    String currency_id;

}

