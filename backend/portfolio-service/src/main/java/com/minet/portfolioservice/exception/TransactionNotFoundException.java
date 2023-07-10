package com.minet.portfolioservice.exception;

public class TransactionNotFoundException extends RuntimeException{
    public TransactionNotFoundException(String message) {
        super(message);
    }

    public TransactionNotFoundException(Throwable e) {
        super(e);
    }
}
