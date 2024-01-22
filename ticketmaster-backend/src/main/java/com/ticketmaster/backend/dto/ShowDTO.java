package com.ticketmaster.backend.dto;

import com.ticketmaster.backend.entities.Show;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ShowDTO {

    private Long id;
    private String artista;
    private String tour;
    private String espaco;
    private String data;
    private String imgUrl;
    private  String linkTour;

    public ShowDTO(Show show){
        this.id = show.getId();
        this.artista = show.getArtista().getNome();
        this.tour = show.getTour().getNome();
        this.espaco = show.getEspaco().getNome().concat(" | ").concat(show.getCidade().getNome());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d 'de' MMMM 'de' yyyy '|' HH:mm", new Locale("pt", "BR"));
        this.data = show.getData().format(formatter);
        this.imgUrl = show.getTour().getImgTour();
        this.linkTour = show.getTour().getLink();

    }
}
