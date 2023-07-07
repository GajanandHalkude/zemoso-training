package com.minet.userservice.vo;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Transaction {

    private int id;
    private String currency_Id;
    private String type;
    private String symbol;
    private double price;
    private double quantity;
    private LocalDateTime date;
    private String status;
}
