package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.dto.IngressoDTO;
import com.ticketmaster.backend.service.IngressoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/meusingressos")
@CrossOrigin
public class IngressoController {

    @Autowired
    private IngressoService service;

    @GetMapping
    public ResponseEntity<List<IngressoDTO>> buscarMeusIngressos(@RequestHeader(value = "Authorization") String token){
        return ResponseEntity.ok(service.buscarMeusIngressos(token));
    }

    @PutMapping("/{idIngresso}")
    public ResponseEntity<Void> validarIngresso(@PathVariable Long idIngresso) {
        service.validarIngresso(idIngresso);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/pedido/{idPedido}")
    public ResponseEntity<List<IngressoDTO>> buscarIngressosDeUmPedido(@PathVariable Long idPedido){
        return ResponseEntity.ok(service.buscarIngressosDeUmPedido(idPedido));
    }

}
