package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.config.auth.TokenService;
import com.ticketmaster.backend.dto.*;
import com.ticketmaster.backend.entities.User;
import com.ticketmaster.backend.repositories.UserRepository;
import com.ticketmaster.backend.service.AuthService;
import com.ticketmaster.backend.service.UserService;
import com.ticketmaster.backend.service.exceptions.EmailExistenteException;
import jakarta.validation.Valid;
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
    private AuthService service;

    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody @Valid LoginDTO dto) {
        return ResponseEntity.ok(service.login(dto));
    }

    @PostMapping("/signup")
    public ResponseEntity<UserDTO> signup(@RequestBody @Valid SignupDTO dto) {
        return ResponseEntity.ok(service.signup(dto));
    }

    @PostMapping("/validate")
    public ResponseEntity<UserDTO> validateToken(@RequestBody TokenDTO token) {
        return ResponseEntity.ok(service.validateToken(token));
    }
}
