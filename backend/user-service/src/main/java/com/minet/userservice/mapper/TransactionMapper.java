package com.minet.userservice.mapper;


import com.minet.userservice.vo.Transaction;
import com.minet.userservice.dto.TransactionDto;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Slf4j
@Service
public class TransactionMapper {

    @Autowired
    private ModelMapper modelMapper;

    public Transaction convertToEntity(TransactionDto transactionDto) {
        try {
            Transaction transaction = modelMapper.map(transactionDto, Transaction.class);
            log.info(" >>> INSIDE TransactionMapper: convertToEntity() Converting dto to entity");
            return transaction;
        }
        catch(NullPointerException exception) {
            log.error(" >>> INSIDE TransactionMapper: convertToEntity() exception creating entity");
            throw new NullPointerException("NullPointerException in converting to entity");
        }
    }

    public TransactionDto convertToDto(Transaction transaction) {
        try {
            TransactionDto transactionDto = modelMapper.map(transaction, TransactionDto.class);
            log.info(" >>> INSIDE TransactionMapper: convertToDto() Converting entity to dto");
            return transactionDto;
        }
        catch(NullPointerException exception) {
            log.error(" >>> TransactionMapper: convertToEntity() exception creating dto");
            throw new NullPointerException("NullPointerException in converting to dto");
        }
    }

}
