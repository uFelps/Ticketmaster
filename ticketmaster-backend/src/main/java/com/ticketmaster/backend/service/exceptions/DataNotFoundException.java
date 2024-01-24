package com.ticketmaster.backend.service.exceptions;

public class DataNotFoundException extends RuntimeException{

    public DataNotFoundException(String msg){
        super(msg);
    }


}
