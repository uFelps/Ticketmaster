package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Cidade;
import com.ticketmaster.backend.entities.Espaco;
import com.ticketmaster.backend.entities.Show;
import com.ticketmaster.backend.entities.Tour;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ShowRepository extends JpaRepository<Show, Long> {

    Page<Show> findByTour(Pageable pageable, Tour tour);

    @Query("SELECT s FROM Show s WHERE s.cidade = :cidade ORDER BY RAND()")
    Page<Show> findByCidade(@Param("cidade") Cidade citydata, Pageable pageable);
}
