package com.ticketmaster.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tour")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Tour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String imgTour;

    @OneToOne
    @JoinColumn(name = "artista")
    private Artista artista;

    @OneToMany(mappedBy = "tour")
    private List<Show> shows = new ArrayList<>();


}
