package com.ticketmaster.backend.service;

import com.ticketmaster.backend.config.auth.TokenService;
import com.ticketmaster.backend.dto.PedidoDTO;
import com.ticketmaster.backend.entities.Pedido;
import com.ticketmaster.backend.entities.User;
import com.ticketmaster.backend.repositories.PedidoRepository;
import com.ticketmaster.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository repository;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Object buscarMeusPedidos(String token, Pageable pageable) {
        String email = tokenService.validarToken(token.replace("Bearer ", ""));

        User user = userRepository.findByEmailReturnUser(email);

        Page<Pedido> pedidos = repository.buscarPorUsuario(user, pageable);


        return pedidos.map(PedidoDTO::new);
    }
}
