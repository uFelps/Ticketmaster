package com.ticketmaster.backend.dto;

import com.ticketmaster.backend.entities.Cartao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartaoDTO {

    private String titular;
    private String numero;
    private String cvv;
    private String validade;
    private String numIdentificador;
    private Boolean saveCartao;
    private String bandeira;

    public CartaoDTO(Cartao cartao){
        this.titular = cartao.getTitular();
        this.numero = cartao.getNumero();
        this.cvv = cartao.getCvv();
        this.validade = cartao.getValidade();
        this.numIdentificador = cartao.getNumIdentificador();
        this.saveCartao = cartao.getSaveCartao();
        this.bandeira = cartao.getBandeira();
    }
}
