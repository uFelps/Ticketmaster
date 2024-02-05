package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.dto.ItemCarrinhoDTO;
import com.ticketmaster.backend.dto.PagamentoDTO;
import com.ticketmaster.backend.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.service.annotation.GetExchange;

import java.util.List;

@RestController
@RequestMapping("carrinho")
@CrossOrigin
public class CarrinhoController {


    @Autowired
    private CarrinhoService service;


    @GetMapping("/{email}")
    public ResponseEntity<List<ItemCarrinhoDTO>> buscarCarrinhoPorUsuario(@PathVariable String email){
        return ResponseEntity.ok(service.buscarCarrinhoPorUsuario(email));
    }

    @PostMapping("/{email}")
    public ResponseEntity<Boolean> adicionarItemAoCarrinho(@RequestBody List<ItemCarrinhoDTO> dtos, @PathVariable String email) {
        return ResponseEntity.ok(service.adicionarItemAoCarrinho(dtos, email));
    }

    @DeleteMapping("/{idItem}")
    public ResponseEntity<Void> removerItemDoCarrinho(@PathVariable Long idItem){
        return ResponseEntity.ok(service.removerItemDoCarrinho(idItem));
    }

    @PostMapping("/finalizarCompra/{email}")
    public ResponseEntity<Boolean> finalizarCompra(@RequestBody PagamentoDTO pagamentoDTO, @PathVariable String email){
        return ResponseEntity.ok(service.finalizarCompra(pagamentoDTO, email));

    }


}
