package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Espaco;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EspacoRepository extends JpaRepository<Espaco, Long> {

}
