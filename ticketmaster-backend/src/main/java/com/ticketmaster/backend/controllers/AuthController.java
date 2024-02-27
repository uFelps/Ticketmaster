package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.config.auth.TokenService;
import com.ticketmaster.backend.dto.*;
import com.ticketmaster.backend.entities.User;
import com.ticketmaster.backend.repositories.UserRepository;
import com.ticketmaster.backend.service.UserService;
import com.ticketmaster.backend.service.exceptions.EmailExistenteException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository repository;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody LoginDTO dto) {

        var credentials = new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getSenha());
        var auth = authenticationManager.authenticate(credentials);

        User user = (User) auth.getPrincipal();

        String token = tokenService.gerarToken(user);

        return ResponseEntity.ok(new UserDTO(user, token));
    }

    @PostMapping("/signup")
    public ResponseEntity<UserDTO> signup(@RequestBody SignupDTO dto) {

        //criando um novo user
        if (repository.findByEmail(dto.getEmail()) != null) throw new EmailExistenteException("Email já existente");
        String senhaCripto = new BCryptPasswordEncoder().encode(dto.getSenha());
        User user = new User(null, dto.getNome(), dto.getEmail(), senhaCripto, dto.getTelefone(), dto.getCpf(), dto.getCidade(), 0, UserRole.USER);
        user = repository.save(user);

        //fazendo o login
        var credentials = new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getSenha());
        var auth = authenticationManager.authenticate(credentials);
        String token = tokenService.gerarToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new UserDTO(user, token));
    }

    @PostMapping("/validate")
    public ResponseEntity<UserDTO> validateToken(@RequestBody TokenDTO token) {

        try {
            String subject = tokenService.validarToken(token.getToken());
            User user = repository.findByEmailReturnUser(subject);
            return ResponseEntity.ok(new UserDTO(user, token.getToken()));


        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
