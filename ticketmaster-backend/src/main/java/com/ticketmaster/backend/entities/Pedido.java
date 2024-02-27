package com.ticketmaster.backend.entities;

import com.ticketmaster.backend.entities.enuns.StatusPedido;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pedido")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime data;
    private StatusPedido status;
    private String metodoPagamento;
    private Double total;

    @ManyToOne
    @JoinColumn(name = "cartao")
    private Cartao cartao;

    @ManyToOne
    @JoinColumn(name = "usuario")
    private User usuario;

    @OneToMany(mappedBy = "pedido")
    private List<Ingresso> ingressos = new ArrayList<>();
}
