package com.ticketmaster.backend.service;

import com.ticketmaster.backend.config.auth.TokenService;
import com.ticketmaster.backend.dto.*;
import com.ticketmaster.backend.entities.User;
import com.ticketmaster.backend.repositories.UserRepository;
import com.ticketmaster.backend.service.exceptions.AutenticationException;
import com.ticketmaster.backend.service.exceptions.EmailExistenteException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository repository;

    @Transactional
    public UserDTO login(LoginDTO dto){
      try{
          var credentials = new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getSenha());
          var auth = authenticationManager.authenticate(credentials);

          User user = (User) auth.getPrincipal();

          String token = tokenService.gerarToken(user);

          return new UserDTO(user, token);
      }
      catch (BadCredentialsException e){
          throw new AutenticationException("Email ou senha incorretos");
      }
    }

@Transactional
    public UserDTO signup(SignupDTO dto){
        //criando um novo user
        if (repository.findByEmail(dto.getEmail()) != null) throw new EmailExistenteException("Email já existente");
        String senhaCripto = new BCryptPasswordEncoder().encode(dto.getSenha());
        User user = new User(null, dto.getNome(), dto.getEmail(), senhaCripto, dto.getTelefone(), dto.getCpf(), dto.getCidade(), 0, UserRole.USER);
        user = repository.save(user);

        //fazendo o login
        var credentials = new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getSenha());
        var auth = authenticationManager.authenticate(credentials);
        String token = tokenService.gerarToken((User) auth.getPrincipal());

        return new UserDTO(user, token);
    }

    @Transactional
    public UserDTO validateToken(TokenDTO token){
        try {
            String subject = tokenService.validarToken(token.getToken());
            User user = repository.findByEmailReturnUser(subject);
            return new UserDTO(user, token.getToken());

        } catch (Exception e) {
            throw new AutenticationException("Erro ao validar token: " + e.getMessage());
        }
    }
}
