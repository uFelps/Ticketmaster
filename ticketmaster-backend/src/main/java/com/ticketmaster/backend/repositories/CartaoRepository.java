package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Cartao;
import com.ticketmaster.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CartaoRepository extends JpaRepository<Cartao, Long> {
    Cartao findByNumero(String numero);

    @Query("SELECT c FROM Cartao c WHERE c.usuario = :param AND c.saveCartao = true")
    List<Cartao> buscarPorUsuario(@Param("param") User usuario);
}
