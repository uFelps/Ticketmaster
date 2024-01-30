package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.dto.SetorDTO;
import com.ticketmaster.backend.entities.Setor;
import com.ticketmaster.backend.service.EspacoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("espaco")
@CrossOrigin
public class EspacoController {

    @Autowired
    private EspacoService service;


    @GetMapping("/{espaco}/setores")
    public ResponseEntity<List<SetorDTO>> buscarSetoresPorEspaco(@PathVariable String espaco){
        espaco = espaco.replace("_", " ");
        return ResponseEntity.ok(service.buscarSetoresPorEspaco(espaco));
    }
}
