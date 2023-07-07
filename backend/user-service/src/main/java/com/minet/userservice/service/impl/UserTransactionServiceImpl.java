package com.minet.userservice.service.impl;

import com.minet.userservice.vo.Transaction;
import com.minet.userservice.dao.UserTransactionRepository;
import com.minet.userservice.entity.User;
import com.minet.userservice.entity.UserTransaction;
import com.minet.userservice.exception.TransactionNotFoundException;
import com.minet.userservice.service.UserTransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class UserTransactionServiceImpl implements UserTransactionService {

    @Value("${transaction.url}")
    private String transactionUrl;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private UserTransactionRepository userTransactionRepository;


    @Override
    public List<Transaction> getAllTransactionsForUser(int userId) {
        log.info(" >>> INSIDE UserTransactionService: getting all transactions");
        List<UserTransaction> userTransactions = userTransactionRepository.findByUserId(userId);
        if (userTransactions.isEmpty()) {
            throw new TransactionNotFoundException("Transactions not found");
        }
        log.info(userTransactions.size() + " ");
        List<Transaction> transactions = new ArrayList<>();
        for (UserTransaction userTransaction : userTransactions) {
            Transaction transaction = restTemplate.getForObject(transactionUrl + userTransaction.getTransactionId(), Transaction.class);
            if(transaction==null){
                throw new TransactionNotFoundException("Transactions not found");
            }
            log.info("<<<<<<<<<<<<<<<<<<<<<<<<<<<<< "+transaction.toString());
            transactions.add(transaction);
        }
        return transactions;
    }

    @Override
    public Transaction getTransactionForUserByTransactionId(int userId, int transactionId) {
        try {
            UserTransaction userTransaction = userTransactionRepository.findByUserIdAndTransactionId(userId, transactionId);
            return restTemplate.getForObject(transactionUrl + userTransaction.getTransactionId(), Transaction.class);
        } catch (TransactionNotFoundException e) {
            log.error("Transaction not found with id: " + transactionId);
            throw new TransactionNotFoundException("Transaction not found with id: " + transactionId);
        }
    }

    @Override
    public Transaction saveTransaction(User user, Transaction transaction) {
        Transaction transaction1 = restTemplate.postForObject(transactionUrl, transaction, Transaction.class);
        if (transaction1 == null) {
            throw new TransactionNotFoundException("Unable to add a  transaction");
        }
        UserTransaction userTransaction = new UserTransaction(user, transaction1.getId());
        userTransactionRepository.save(userTransaction);
        return transaction1;
    }
}
