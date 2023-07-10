package com.minet.userservice.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="user_wallet", schema="minet")
public class UserWallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @NotNull
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH,CascadeType.MERGE})
    @JoinColumn(name = "user_id")
    @NotNull
    private User user;

    @Column(name = "wallet_id")
    @NotNull
    private int walletId;

    public UserWallet(User user, int walletId) {
        this.user = user;
        this.walletId = walletId;
    }
}
