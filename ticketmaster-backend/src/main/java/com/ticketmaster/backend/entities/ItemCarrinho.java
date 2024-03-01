package com.ticketmaster.backend.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "carrinho")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ItemCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String setor;
    private String tipo;
    private Double valor;

    @ManyToOne
    @JoinColumn(name = "show")
    private Show show;

    @ManyToOne
    @JoinColumn(name = "usuario")
    private User usuario;
}
