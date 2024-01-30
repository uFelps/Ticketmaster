package com.ticketmaster.backend.dto;

import com.ticketmaster.backend.entities.Setor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SetorDTO {

    private Long id;
    private String nome;
    private Double precoInteira;
    private Double precoMeia;

    public SetorDTO(Setor setor){
        this.id = setor.getId();
        this.nome = setor.getNome();
        this.precoInteira = setor.getPrecoInteira();
        this.precoMeia = setor.getPrecoMeia();
    }
}
