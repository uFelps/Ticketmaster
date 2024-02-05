package com.ticketmaster.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PagamentoDTO {

    private String tipoPagamento;
    private Double total;
    private CartaoDTO cartao;
    private List<IngressoDTO> ingressos = new ArrayList<>();
    private List<Long> idItemCarrinho;
}
