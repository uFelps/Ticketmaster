package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.dto.CidadeDTO;
import com.ticketmaster.backend.service.CidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("cidades")
@CrossOrigin
public class CidadeController {

    @Autowired
    private CidadeService cidadeService;

    @GetMapping
    public ResponseEntity<Page<CidadeDTO>> buscarCidades(Pageable pageable){
        return ResponseEntity.ok(cidadeService.buscarCidades(pageable));
    }
}
