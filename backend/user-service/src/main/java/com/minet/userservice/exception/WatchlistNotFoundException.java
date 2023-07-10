package com.minet.userservice.exception;

public class WatchlistNotFoundException extends RuntimeException {
    public WatchlistNotFoundException(String message){
        super(message);
    }
}
