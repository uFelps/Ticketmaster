package com.ticketmaster.backend.entities.enuns;

public enum StatusIngresso {

    DISPONIVEL("disponivel"),
    UTILIZADO("utilizado");


    private String status;

    StatusIngresso(String status) {
        this.status = status;
    }

    public String getStatus(){
        return status;
    }
}
