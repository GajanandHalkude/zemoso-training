package com.minet.portfolioservice.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDto {
    private int id;
    private String currencyId;
    private String type;
    private String symbol;
    private double price;
    private double quantity;
    private LocalDateTime date;
    private String status;
}
