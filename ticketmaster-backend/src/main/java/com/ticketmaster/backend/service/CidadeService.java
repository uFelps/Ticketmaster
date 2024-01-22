package com.ticketmaster.backend.service;

import com.ticketmaster.backend.dto.CidadeDTO;
import com.ticketmaster.backend.entities.Cidade;
import com.ticketmaster.backend.repositories.CidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CidadeService {

    @Autowired
    private CidadeRepository repository;

    public Page<CidadeDTO> buscarCidades(Pageable pageable) {
        Page<Cidade> cidades = repository.findAll(pageable);

        return cidades.map(CidadeDTO::new);
    }
}
