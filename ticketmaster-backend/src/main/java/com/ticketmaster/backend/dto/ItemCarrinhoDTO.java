package com.ticketmaster.backend.dto;

import com.ticketmaster.backend.entities.ItemCarrinho;
import com.ticketmaster.backend.entities.Show;
import com.ticketmaster.backend.entities.User;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ItemCarrinhoDTO {


    private Long id;
    private String setor;
    private String tipo;
    private Double valor;
    private ShowDTO show;
    private String usuario;

    public ItemCarrinhoDTO(ItemCarrinho itemCarrinho){
        this.id = itemCarrinho.getId();
        this.setor = itemCarrinho.getSetor();
        this.tipo = itemCarrinho.getTipo();
        this.valor = itemCarrinho.getValor();
        this.show = new ShowDTO(itemCarrinho.getShow());
        this.usuario = itemCarrinho.getUsuario().getEmail();
    }
}
