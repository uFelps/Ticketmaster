package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Artista;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArtistaRepository extends JpaRepository<Artista, Long> {
    Optional<Artista> findByNome(String nome);
}
