package com.ticketmaster.backend.dto;

import com.ticketmaster.backend.entities.Ingresso;
import com.ticketmaster.backend.entities.Pedido;
import com.ticketmaster.backend.entities.enuns.StatusPedido;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PedidoDTO {

    private Long id;
    private String data;
    private StatusPedido status;
    private String metodoPagamento;
    private Double total;
    private String usuario;

    public PedidoDTO(Pedido pedido){
        this.id = pedido.getId();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy '|' HH:mm", new Locale("pt", "BR"));
        this.data = pedido.getData().format(formatter);
        this.status = pedido.getStatus();
        this.metodoPagamento = pedido.getMetodoPagamento();
        this.total = pedido.getTotal();
        this.usuario = pedido.getUsuario().getNome();
    }
}
