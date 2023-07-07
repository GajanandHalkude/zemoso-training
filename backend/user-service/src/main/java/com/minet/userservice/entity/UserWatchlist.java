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
@Table(name="watchlist", schema="minet")
public class UserWatchlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @NotNull
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH,CascadeType.MERGE})
    @JoinColumn(name = "user_id")
    @NotNull
    private User user;

    @Column(name = "currency_id")
    @NotNull
    private String currencyId;

    public UserWatchlist(User user, String currencyId) {
        this.user = user;
        this.currencyId = currencyId;
    }
}
