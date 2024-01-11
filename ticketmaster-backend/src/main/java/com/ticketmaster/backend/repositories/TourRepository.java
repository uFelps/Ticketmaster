package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourRepository extends JpaRepository<Tour, Long> {
}
