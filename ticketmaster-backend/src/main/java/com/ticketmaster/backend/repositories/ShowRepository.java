package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Cidade;
import com.ticketmaster.backend.entities.Espaco;
import com.ticketmaster.backend.entities.Show;
import com.ticketmaster.backend.entities.Tour;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShowRepository extends JpaRepository<Show, Long> {

    Page<Show> findByTour(Pageable pageable, Tour tour);

    Page<Show> findByCidade(Cidade citydata, Pageable pageable);
}
