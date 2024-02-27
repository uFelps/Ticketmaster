package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Pedido;
import com.ticketmaster.backend.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

    @Query("SELECT p FROM Pedido p WHERE p.usuario = :param")
    Page<Pedido> buscarPorUsuario(@Param("param") User user, Pageable pageable);
}
