package com.ticketmaster.backend.service;

import com.ticketmaster.backend.config.auth.TokenService;
import com.ticketmaster.backend.dto.CartaoDTO;
import com.ticketmaster.backend.dto.NumCartaoDTO;
import com.ticketmaster.backend.entities.Cartao;
import com.ticketmaster.backend.entities.User;
import com.ticketmaster.backend.repositories.CartaoRepository;
import com.ticketmaster.backend.repositories.UserRepository;
import com.ticketmaster.backend.service.exceptions.DataNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CartaoService {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartaoRepository repository;

    @Transactional
    public List<CartaoDTO> meusCartoes(String token) {

        String email = tokenService.validarToken(token.replace("Bearer ", ""));
        User user = userRepository.findByEmailReturnUser(email);

        List<Cartao> cartoes = repository.buscarPorUsuario(user);

        return cartoes.stream().map((CartaoDTO::new)).toList();
    }


    public void apagarCartao(NumCartaoDTO numCartao) {
        Cartao cartao = repository.findByNumero(numCartao.getNumero());
        if(cartao == null){
            throw new DataNotFoundException("Cartão não encontrado");
        }
        cartao.setSaveCartao(false);
        repository.save(cartao);
    }
}
