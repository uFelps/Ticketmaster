package com.ticketmaster.backend.dto;

import com.ticketmaster.backend.entities.Tour;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TourDTO {

    private Long id;
    private String artista;
    private String nome;
    private String img;
    private String link;
    private String categoria;

    public TourDTO(Tour data){
        this.id = data.getId();
        this.artista = data.getArtista().getNome();
        this.nome = data.getNome();
        this.img = data.getImgTour();
        this.link = data.getLink();
        this.categoria = data.getCategoria();
    }
}
