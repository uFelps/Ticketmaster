package com.ticketmaster.backend.entities;

import com.ticketmaster.backend.dto.CartaoDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cartao")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Cartao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numero;
    private String titular;
    private String cvv;
    private String validade;
    private String numIdentificador;
    private Boolean saveCartao;
    private String bandeira;

    @ManyToOne
    @JoinColumn(name = "usuario")
    private User usuario;

    @OneToMany(mappedBy = "cartao")
    private List<Pedido> pedidos = new ArrayList<>();



}
