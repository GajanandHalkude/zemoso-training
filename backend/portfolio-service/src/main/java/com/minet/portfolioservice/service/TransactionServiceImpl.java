package com.minet.portfolioservice.service;

import com.minet.portfolioservice.exception.TransactionNotFoundException;
import com.minet.portfolioservice.repository.TransactionRepository;
import com.minet.portfolioservice.entity.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TransactionServiceImpl implements TransactionService{
    @Autowired
    private TransactionRepository transactionRepository;


    @Override
    public List<Transaction> findAllTransactions() {
    try {
        return transactionRepository.findAll();
    }
    catch(Exception e){
        throw new TransactionNotFoundException("Transactions not found");
    }
    }

    @Override
    public Optional<Transaction> findTransactionById(int id) {
        Optional<Transaction> tempTransaction = transactionRepository.findById(id);
        if(tempTransaction.isPresent()) {
            return Optional.of(tempTransaction.get());
        }
        else{
            throw new TransactionNotFoundException("Cannot find transaction of id: " + id);
        }
    }

    @Override
    public Transaction addNewTransaction(Transaction newTransaction) {
        try {
            transactionRepository.save(newTransaction);
            return newTransaction;
        } catch (Exception e) {
            throw new TransactionNotFoundException(e);
        }
    }

    @Override
    public List<Transaction> findByCurrencyId(String currencyId) {
        try {
            return transactionRepository.findByCurrencyId(currencyId);
        }
        catch(Exception e) {
            throw new TransactionNotFoundException("Cannot find transactions of a cryptocurrency");
        }
    }


}
