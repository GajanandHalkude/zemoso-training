package com.minet.portfolioservice.repository;

import com.minet.portfolioservice.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction,Integer> {
    List<Transaction> findByCurrencyId(String currencyId);
}
