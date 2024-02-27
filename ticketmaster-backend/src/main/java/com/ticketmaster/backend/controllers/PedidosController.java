package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pedidos")
@CrossOrigin
public class PedidosController {

    @Autowired
    private PedidoService service;

    @GetMapping
    public ResponseEntity buscarMeusPedidos(@RequestHeader(value = "Authorization") String token, Pageable pageable){
        return ResponseEntity.ok(service.buscarMeusPedidos(token, pageable));
    }


}
