package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
