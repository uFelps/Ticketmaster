package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Espaco;
import com.ticketmaster.backend.entities.Setor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SetorRepository extends JpaRepository<Setor, Long> {
    List<Setor> findAllByEspaco(Espaco espaco1);
}
