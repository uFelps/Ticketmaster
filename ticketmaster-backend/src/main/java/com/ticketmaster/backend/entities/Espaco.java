package com.ticketmaster.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "espaco")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Espaco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String imgMapa;
    private String img;

    @OneToMany(mappedBy = "espaco")
    private List<Show> shows = new ArrayList<>();

    @OneToMany(mappedBy = "espaco")
    private List<Setor> setores = new ArrayList<>();
}
