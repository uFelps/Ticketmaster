package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.dto.CartaoDTO;
import com.ticketmaster.backend.dto.NumCartaoDTO;
import com.ticketmaster.backend.service.CartaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("meusCartoes")
@CrossOrigin
public class CartaoController {

    @Autowired
    private CartaoService service;

    @GetMapping
    public ResponseEntity<List<CartaoDTO>> meusCartoes(@RequestHeader(value = "Authorization") String token){
            return ResponseEntity.ok(service.meusCartoes(token));
    }

    @PutMapping("/deletar")
    public ResponseEntity<Void> apagarCartao(@RequestBody NumCartaoDTO cartaoDTO){
        service.apagarCartao(cartaoDTO);
        return ResponseEntity.ok().build();
    }
}
