package com.minet.walletservice.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import java.math.BigDecimal;

@Entity
@Table(name = "wallet")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    @NotNull(message ="is required")
    private String name;

    @Column(name = "balance")
    @ColumnDefault("0.00")
    private BigDecimal balance;

    @Column(name = "average_value")
    private BigDecimal avgValue;

    @Column(name = "invested_amount")
    private BigDecimal investedAmount;


    @Column(name = "currency_id")
    private String currencyId;

    @Override
    public String toString() {
        return "Wallet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", balance=" + balance +
                ", avgValue=" + avgValue +
                ", investedAmount=" + investedAmount +
                ", currencyId='" + currencyId + '\'' +
                '}';
    }
}
