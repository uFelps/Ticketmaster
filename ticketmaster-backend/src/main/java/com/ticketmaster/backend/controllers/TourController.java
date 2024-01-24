package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.dto.ShowDTO;
import com.ticketmaster.backend.dto.TourDTO;
import com.ticketmaster.backend.entities.Show;
import com.ticketmaster.backend.entities.Tour;
import com.ticketmaster.backend.service.ShowService;
import com.ticketmaster.backend.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("tours")
@CrossOrigin
public class TourController {

    @Autowired
    private TourService service;

    @Autowired
    private ShowService showService;

    @GetMapping
    public ResponseEntity<Page<TourDTO>> getAllTours(Pageable pageable){

        return ResponseEntity.ok(service.findAllTours(pageable));
    }

    @GetMapping("/{nomeArtista}")
    public ResponseEntity<TourDTO> buscarTourPorArtista(@PathVariable String nomeArtista){
        return ResponseEntity.ok(service.buscarTourPorArtista(nomeArtista));
    }

    @GetMapping("/buscarPorCategoria/{categoria}")
    ResponseEntity<Page<TourDTO>> buscarPorCategoria(Pageable pageable, @PathVariable String categoria){
        return ResponseEntity.ok(service.buscarPorCategoria(pageable, categoria));
    }

    @GetMapping("/{idTour}/shows")
    public ResponseEntity<Page<ShowDTO>> getShowsofTour(Pageable pageable, @PathVariable Long idTour){
        return ResponseEntity.ok(showService.getShowsofTour(pageable, idTour));
    }

}
