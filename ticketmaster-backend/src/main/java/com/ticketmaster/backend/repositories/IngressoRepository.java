package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Ingresso;
import com.ticketmaster.backend.entities.Pedido;
import com.ticketmaster.backend.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngressoRepository extends JpaRepository<Ingresso, Long> {

    @Query("SELECT i FROM Ingresso i  WHERE i.usuario = :param AND i.status = 0")
    List<Ingresso> buscarPorUsuario(@Param("param") User user);

    @Query("SELECT COUNT(*) FROM Ingresso i  WHERE i.usuario = :param AND i.status = 0")
    Long buscarNumeroDeIngressosDisponiveis(@Param("param") User user);

    List<Ingresso> findAllByPedido(Pedido pedido);
}
