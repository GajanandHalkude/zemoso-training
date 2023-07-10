package com.minet.portfolioservice.service;

import com.minet.portfolioservice.entity.Transaction;

import java.util.List;
import java.util.Optional;

public interface TransactionService {
    List<Transaction> findAllTransactions();
    Optional<Transaction> findTransactionById(int transactionId);

    Transaction addNewTransaction(Transaction transaction);

    List<Transaction> findByCurrencyId(String currencyId);
}
