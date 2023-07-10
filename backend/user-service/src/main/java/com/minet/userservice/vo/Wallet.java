package com.minet.userservice.vo;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Wallet {
    private int id;
    private String name;
    private double balance;
    private double avgValue;
    private double investedAmount;
    private String currencyId;
}
