package com.minet.cryptoservice.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CryptoCurrencyDto {
    private String id;
    private String name;
    private String symbol;
    private String icon;
    private double price;
    private double marketCap;
    private double totalSupply;
    private double availableSupply;
    private double priceChange;
    private double volume;
}
