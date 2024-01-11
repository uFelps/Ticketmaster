package com.ticketmaster.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "show")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Show {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "artista")
    private Artista artista;

    @ManyToOne
    @JoinColumn(name = "tour")
    private Tour tour;

    @ManyToOne
    @JoinColumn(name = "espaco")
    private Espaco espaco;

    @ManyToOne
    @JoinColumn(name = "cidade")
    private Cidade cidade;
    private LocalDateTime data;
}
