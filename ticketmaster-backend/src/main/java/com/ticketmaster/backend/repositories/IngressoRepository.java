package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Ingresso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngressoRepository extends JpaRepository<Ingresso, Long> {
}
