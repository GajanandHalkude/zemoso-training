package com.minet.userservice.service;

import com.minet.userservice.dto.TransactionDto;
import com.minet.userservice.vo.Transaction;
import com.minet.userservice.entity.User;

import java.util.List;

public interface UserTransactionService {
    public List<TransactionDto> getAllTransactionsForUser(int userId);
    public TransactionDto getTransactionForUserByTransactionId(int userId,int transactionId);
    public Transaction saveTransaction(User user, Transaction transaction);
}
