package com.ticketmaster.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("tours")
public class TourController {

    @GetMapping
    public ResponseEntity getAllTours(){
        return ResponseEntity.ok("Unlimited Love World Tour");
    }
}
