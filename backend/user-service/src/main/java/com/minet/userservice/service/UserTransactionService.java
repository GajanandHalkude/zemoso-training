package com.minet.userservice.service;

import com.minet.userservice.vo.Transaction;
import com.minet.userservice.entity.User;

import java.util.List;

public interface UserTransactionService {
    public List<Transaction> getAllTransactionsForUser(int userId);
    public Transaction getTransactionForUserByTransactionId(int userId,int transactionId);
    public Transaction saveTransaction(User user, Transaction transaction);
}
