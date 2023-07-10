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
@Table(name="user_transaction", schema="minet")
public class UserTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @NotNull
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH,CascadeType.MERGE})
    @JoinColumn(name = "user_id")
    @NotNull
    private User user;

    @Column(name = "transaction_id")
    @NotNull
    private int transactionId;

    public UserTransaction(User user, int transactionId) {
        this.user = user;
        this.transactionId = transactionId;
    }

    @Override
    public String toString() {
        return "UserTransaction{" +
                "id=" + id +
                ", user=" + user +
                ", transactionId=" + transactionId +
                '}';
    }
}
