package com.ticketmaster.backend.service.exceptions;

public class AutenticationException extends RuntimeException {
    public AutenticationException(String msg) {
        super(msg);
    }
}
