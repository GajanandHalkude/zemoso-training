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
    private double avg_value;
    private double invested_amount;
    private String currency_Id;
}
