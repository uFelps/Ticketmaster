package com.ticketmaster.backend.service;

import com.ticketmaster.backend.config.auth.TokenService;
import com.ticketmaster.backend.dto.IngressoDTO;
import com.ticketmaster.backend.entities.Ingresso;
import com.ticketmaster.backend.entities.User;
import com.ticketmaster.backend.entities.enuns.StatusIngresso;
import com.ticketmaster.backend.repositories.IngressoRepository;
import com.ticketmaster.backend.repositories.UserRepository;
import com.ticketmaster.backend.service.exceptions.IngressoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class IngressoService {

    @Autowired
    private IngressoRepository repository;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public List<IngressoDTO> buscarMeusIngressos(String token) {
       String email =  tokenService.validarToken(token.replace("Bearer ", ""));

        User user = userRepository.findByEmailReturnUser(email);


        List<Ingresso> ingressos = repository.buscarPorUsuario(user);

        return ingressos.stream().map((IngressoDTO::new)).toList();
    }

    public void validarIngresso(Long idIngresso) {
        System.out.println("Passou Aqui");
        try{
            Ingresso ingresso = repository.findById(idIngresso).get();
            System.out.println("Passou Aqui");
            ingresso.setStatus(StatusIngresso.UTILIZADO);
            repository.save(ingresso);
        }
        catch (Exception e){
            throw new IngressoException("Erro ao validar o ingresso");
        }
    }
}
