package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.dto.AlterarSenhaDTO;
import com.ticketmaster.backend.dto.UserDTO;
import com.ticketmaster.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping
    public ResponseEntity<UserDTO> buscarMeusDados(@RequestHeader(value = "Authorization") String token){
        return ResponseEntity.ok(service.buscarMeusDados(token));
    }

    @PutMapping
    public ResponseEntity<Void> atualizarDados(@RequestBody UserDTO dto){
        service.atualizarDados(dto);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/senha")
    public ResponseEntity<Void> atualizarSenha(@RequestBody AlterarSenhaDTO dto, @RequestHeader(value = "Authorization") String token){
        service.atualizarSenha(dto, token);
        return ResponseEntity.ok().build();
    }
}
