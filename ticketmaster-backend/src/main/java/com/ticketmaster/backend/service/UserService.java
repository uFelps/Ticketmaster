package com.ticketmaster.backend.service;

import com.ticketmaster.backend.config.auth.TokenService;
import com.ticketmaster.backend.dto.AlterarSenhaDTO;
import com.ticketmaster.backend.dto.SenhaDTO;
import com.ticketmaster.backend.dto.UserDTO;
import com.ticketmaster.backend.entities.Ingresso;
import com.ticketmaster.backend.entities.User;
import com.ticketmaster.backend.repositories.IngressoRepository;
import com.ticketmaster.backend.repositories.UserRepository;
import com.ticketmaster.backend.service.exceptions.AutenticationException;
import com.ticketmaster.backend.service.exceptions.EmailExistenteException;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Objects;

@Service
public class UserService {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository repository;

    @Autowired
    private IngressoRepository ingressoRepository;

    @Transactional
    public UserDTO buscarMeusDados(String token) {

        String email = tokenService.validarToken(token.replace("Bearer ", ""));
        User user = repository.findByEmailReturnUser(email);

        Long ingressosDisponiveis = ingressoRepository.buscarNumeroDeIngressosDisponiveis(user);
        Long diasAteOProximoShow =  contarDiasAteOProximoShow(user);

        UserDTO userDTO = new UserDTO(user, token);
        userDTO.setIngressosDisponiveis(ingressosDisponiveis);
        userDTO.setDiasAteProximoShow(diasAteOProximoShow);
        return userDTO;
    }

    private Long contarDiasAteOProximoShow(User user){
        List<Ingresso> ingressos = ingressoRepository.buscarPorUsuario(user);

        if(!ingressos.isEmpty()){


            LocalDateTime agora = LocalDateTime.now();
            LocalDateTime dataMaisProxima = null;
            long menorDiferenca = Long.MAX_VALUE;

            for (Ingresso ingresso : ingressos) {
                LocalDateTime data = ingresso.getShow().getData();
                long diferenca = Math.abs(agora.until(data, ChronoUnit.DAYS));

                if(diferenca < menorDiferenca){
                    menorDiferenca = diferenca;
                    dataMaisProxima = data;
                }
            }

            return menorDiferenca;
        }

        return null;
    }

    public void atualizarDados(UserDTO dto) {
        User user = repository.findById(dto.getId()).get();
        user.setNome(dto.getNome());
        user.setTelefone(dto.getTelefone());
        user.setCpf(dto.getCpf());
        user.setCidade(dto.getCidade());

        if(!Objects.equals(dto.getEmail(), user.getEmail())){
            if(repository.findByEmailReturnUser(dto.getEmail()).getEmail() != null){
                throw new EmailExistenteException("Email já existente");
            }
        }

        user.setEmail(dto.getEmail());

        repository.save(user);
    }


    private Boolean validarSenha(String senha, User user) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.matches(senha, user.getPassword());
    }

    @Transactional
    public void atualizarSenha(AlterarSenhaDTO dto, String token) {
        String email = tokenService.validarToken(token.replace("Bearer ", ""));
        User user = repository.findByEmailReturnUser(email);

        if(validarSenha(dto.getSenhaAtual(), user)){
            user.setSenha(new BCryptPasswordEncoder().encode(dto.getNovaSenha()));
        }
        else {
            throw new AutenticationException("Senha Atual Incorreta");
        }
    }
}
