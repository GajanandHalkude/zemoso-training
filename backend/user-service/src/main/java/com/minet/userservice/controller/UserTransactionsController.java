package com.minet.userservice.controller;

import com.minet.userservice.vo.Transaction;
import com.minet.userservice.dto.TransactionDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.mapper.TransactionMapper;
import com.minet.userservice.service.UserService;
import com.minet.userservice.service.UserTransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Slf4j
@RequestMapping("/users")
public class UserTransactionsController {

    @Autowired
    UserTransactionService userTransactionService;

    @Autowired
    UserService userService;

    @Autowired
    TransactionMapper transactionMapper;

    @GetMapping("/{userId}/transactions")
    public List<TransactionDto> getAllUserTransactions(@PathVariable int userId) {
        try {
            log.info(" >>> INSIDE UserTransactionsController: getting all transactions");
            List<Transaction> transactions = userTransactionService.getAllTransactionsForUser(userId);
            return transactions.stream()
                    .map(transactionMapper::convertToDto)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Transactions found");
        }
    }

    @PostMapping("/{userId}/transactions")
    public TransactionDto saveUserTransactions(@PathVariable int userId, @RequestBody TransactionDto transactionDto) {
        try {
            log.info(" >>> INSIDE UserTransactionsController: adding transactions");
            User user = userService.getUserById(userId);
            return transactionMapper.convertToDto(userTransactionService.saveTransaction(user,transactionMapper.convertToEntity(transactionDto)));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add transaction");
        }
    }

    @GetMapping("/{userId}/transactions/{transactionId}")
    public TransactionDto getUserTransactionsById(@PathVariable int userId, @PathVariable int transactionId) {
        try {
            log.info(" >>> INSIDE UserTransactionsController: getting transactions by transaction id");
            Transaction transaction = userTransactionService.getTransactionForUserByTransactionId(userId, transactionId);
            return transactionMapper.convertToDto(transaction);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user transaction found for given id" + userId);
        }
    }
}
