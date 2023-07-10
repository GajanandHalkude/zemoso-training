package com.minet.portfolioservice.controller;
import com.minet.portfolioservice.dto.TransactionDto;
import com.minet.portfolioservice.entity.Transaction;
import com.minet.portfolioservice.service.MapperService;
import com.minet.portfolioservice.service.TransactionService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/transactions")
public class TransactionController {

    @Autowired
    private final TransactionService transactionService;

    @Autowired
    private MapperService mapperService;

    @GetMapping("/")
    public List<Transaction> getTransactions() {
        try {
            return transactionService.findAllTransactions();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Transactions not found");
        }
    }

    @GetMapping("/{id}")
    public Transaction getTransactionById(@PathVariable int id) {
        try {
            Optional<Transaction> transactionList = transactionService.findTransactionById(id);
            if (transactionList.isPresent()) {
                return transactionList.get();
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Transaction not found with the given id");
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred while retrieving the transaction");
        }
    }

    @GetMapping(value = "/", params = "currencyId")
    public ResponseEntity<List<Transaction>> findByCurrencyId(@RequestParam String currencyId) {
        try {
            List<Transaction> transactionList = transactionService.findByCurrencyId(currencyId);

            if (!transactionList.isEmpty()) {
                return ResponseEntity.ok(transactionList);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred while retrieving the transactions");
        }
    }

    @PostMapping("/")
    public TransactionDto addNewTransaction(@RequestBody TransactionDto transactionDto){
        try{
            Transaction transaction = mapperService.convertToEntity(transactionDto);
            return mapperService.convertToDto(transactionService.addNewTransaction(transaction));
        }

        catch(Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add new transaction");
        }

    }

}
