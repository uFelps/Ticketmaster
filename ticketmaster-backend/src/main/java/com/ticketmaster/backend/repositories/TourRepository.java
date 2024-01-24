package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Artista;
import com.ticketmaster.backend.entities.Tour;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourRepository extends JpaRepository<Tour, Long> {
    Page<Tour> findAllByCategoria(Pageable pageable, String categoria);

    Tour findByArtista(Artista artista);
}
