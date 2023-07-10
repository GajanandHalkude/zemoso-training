package com.minet.userservice.dto;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WalletDto {

   private int id;
   private String name;
   private double balance;
   private double avgValue;
   private double investedAmount;
   private String currencyId;

}

