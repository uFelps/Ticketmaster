package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.config.auth.TokenService;
import com.ticketmaster.backend.dto.LoginDTO;
import com.ticketmaster.backend.dto.SignupDTO;
import com.ticketmaster.backend.dto.TokenDTO;
import com.ticketmaster.backend.dto.UserRole;
import com.ticketmaster.backend.entities.User;
import com.ticketmaster.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository repository;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<TokenDTO> login(@RequestBody LoginDTO dto){

        var credentials = new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getSenha());
        var auth = authenticationManager.authenticate(credentials);

        String token = tokenService.gerarToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new TokenDTO(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupDTO dto){

        if(repository.findByEmail(dto.getEmail()) != null) return ResponseEntity.badRequest().build();

        String senhaCripto = new BCryptPasswordEncoder().encode(dto.getSenha());

        User user = new User(null, dto.getNome(), dto.getEmail(), senhaCripto, dto.getCpf(), dto.getPais(), dto.getCidade(), 0, 0, 0.0, UserRole.USER);

        repository.save(user);

        return ResponseEntity.ok("Conta criada com Sucesso!");

    }
}
