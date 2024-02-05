package com.ticketmaster.backend.repositories;

import com.ticketmaster.backend.entities.ItemCarrinho;
import com.ticketmaster.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemCarrinhoRepository extends JpaRepository<ItemCarrinho, Long> {


    List<ItemCarrinho> findAllByUser(User user);
}
