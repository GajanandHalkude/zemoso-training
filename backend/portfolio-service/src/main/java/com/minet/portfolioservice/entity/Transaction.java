package com.minet.portfolioservice.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "currency_id")
    private String currencyId;

    @Column(name = "type")
    private String type;

    @Column(name = "price")
    private double price;

    @Column(name="symbol")
    private String symbol;

    @Column(name = "quantity")
    private double quantity;

    @Column(name="date")
    private LocalDateTime date;

    @Column(name = "status")
    private String status;
}