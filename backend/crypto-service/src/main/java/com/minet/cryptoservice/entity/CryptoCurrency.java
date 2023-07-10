package com.minet.cryptoservice.entity;

import lombok.*;

import javax.persistence.*;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "currency")
public class CryptoCurrency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "symbol")
    private String symbol;

    @Column(name = "icon")
    private String icon;

    @Column(name = "price")
    private double price;

    @Column(name = "market_cap")
    private double marketCap;

    @Column(name = "total_supply")
    private double totalSupply;

    @Column(name = "available_supply")
    private double availableSupply;

    @Column(name = "price_change")
    private double priceChange;

    @Column(name = "volume")
    private double volume;

    @Override
    public String toString() {
        return "CryptoCurrency{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", symbol='" + symbol + '\'' +
                ", icon='" + icon + '\'' +
                ", price=" + price +
                ", marketCap=" + marketCap +
                ", totalSupply=" + totalSupply +
                ", availableSupply=" + availableSupply +
                ", priceChange=" + priceChange +
                ", volume=" + volume +
                '}';
    }
}
