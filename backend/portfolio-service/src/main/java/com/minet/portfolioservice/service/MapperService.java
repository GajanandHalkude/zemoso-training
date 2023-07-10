package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.TransactionDto;
import com.minet.portfolioservice.entity.Transaction;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class MapperService {

    @Autowired
    private final ModelMapper modelMapper;

    public Transaction convertToEntity(TransactionDto transactionDto) {
        try {
            return modelMapper.map(transactionDto, Transaction.class);

        } catch(Exception exception) {
            throw new NullPointerException("NullPointerException in converting to entity");
        }
    }


    public TransactionDto convertToDto(Transaction transaction) {
        try {
            return modelMapper.map(transaction, TransactionDto.class);
        } catch (Exception exception) {
            throw new NullPointerException("NullPointerException in converting to dto");
        }
    }


}