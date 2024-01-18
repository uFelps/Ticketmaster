package com.ticketmaster.backend.controllers;

import com.ticketmaster.backend.dto.EmailDTO;
import com.ticketmaster.backend.entities.User;
import com.ticketmaster.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("emailDisponivel")
@CrossOrigin
public class EmailController {

    @Autowired
    private UserRepository repository;

    @PostMapping
    public ResponseEntity<Boolean> emailDisponivel(@RequestBody EmailDTO emailDTO){

        User user = repository.findByEmailReturnUser(emailDTO.getEmail());

        if(user != null){
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(true);
    }
}
