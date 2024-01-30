package com.ticketmaster.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "setor")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Setor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Double precoInteira;
    private Double precoMeia;

    @ManyToOne
    @JoinColumn(name = "espaco")
    private Espaco espaco;
}
