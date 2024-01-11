package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.dto.ShowDTO;
import com.ticketmaster.backend.service.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("shows")
public class ShowController {

    @Autowired
    private ShowService showService;

    @GetMapping
    public ResponseEntity<Page<ShowDTO>> findShowsByCity(@RequestParam String cidade, Pageable pageable){

        return ResponseEntity.ok(showService.findShowsByCity(cidade, pageable));
    }
}
