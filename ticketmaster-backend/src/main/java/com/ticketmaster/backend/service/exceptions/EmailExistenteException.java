package com.ticketmaster.backend.service.exceptions;

public class EmailExistenteException extends RuntimeException {
    public EmailExistenteException(String msg){
        super(msg);
    }
}
