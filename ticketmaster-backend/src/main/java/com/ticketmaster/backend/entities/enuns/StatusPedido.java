package com.ticketmaster.backend.entities.enuns;

public enum StatusPedido {

    APROVADO("aprovado"),
    PENDENTE("pendente"),
    CANCELADO("cancelado");


    private String status;

    StatusPedido(String status) {
        this.status = status;
    }

    public String getStatus(){
        return status;
    }

}
