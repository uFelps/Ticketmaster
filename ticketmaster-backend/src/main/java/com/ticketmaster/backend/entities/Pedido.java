package com.ticketmaster.backend.entities;

import com.ticketmaster.backend.entities.enuns.StatusPedido;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
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
    private Instant data;
    private StatusPedido status;
    private String metodoPagamento;

    @ManyToOne
    @JoinColumn(name = "cartao")
    private Cartao cartao;

    @ManyToOne
    @JoinColumn(name = "usuario")
    private User user;

    @OneToMany(mappedBy = "pedido")
    private List<Ingresso> ingressos = new ArrayList<>();
}
