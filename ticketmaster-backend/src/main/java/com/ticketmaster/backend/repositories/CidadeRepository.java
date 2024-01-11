package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Cidade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CidadeRepository extends JpaRepository<Cidade, Long> {
    Cidade findByNome(String nome);
}
