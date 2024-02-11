package com.ticketmaster.backend.dto;

import com.ticketmaster.backend.entities.Ingresso;
import com.ticketmaster.backend.entities.enuns.StatusIngresso;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IngressoDTO {

    private Long id;
    private String setor;
    private String tipo;
    private Double valor;
    private ShowDTO show;
    private String usuario;
    private String status;


    public IngressoDTO(Ingresso ingresso) {
        this.id = ingresso.getId();
        this.setor = ingresso.getSetor();
        this.tipo = ingresso.getTipo();
        this.valor = ingresso.getValor();
        this.show = new ShowDTO(ingresso.getShow());
        this.usuario = ingresso.getUsuario().getNome();
        this.status = ingresso.getStatus().getStatus();
    }
}
