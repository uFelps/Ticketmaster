package com.ticketmaster.backend.dto;

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
    private String user;


}
