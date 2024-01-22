package com.ticketmaster.backend.dto;

import com.ticketmaster.backend.entities.Cidade;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CidadeDTO {

    private Long id;
    private String nome;

    public CidadeDTO(Cidade cidade){
        this.id = cidade.getId();
        this.nome = cidade.getNome();

    }
}
