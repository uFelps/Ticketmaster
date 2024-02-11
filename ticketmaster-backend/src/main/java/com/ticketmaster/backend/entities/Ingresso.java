package com.ticketmaster.backend.entities;

import com.ticketmaster.backend.entities.enuns.StatusIngresso;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "ingresso")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ingresso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "show")
    private Show show;

    @ManyToOne
    @JoinColumn(name = "pedido")
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "usuario")
    private User usuario;
    private String tipo;
    private String setor;
    private Double valor;
    private StatusIngresso status;
}
